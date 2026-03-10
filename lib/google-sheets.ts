export type Product = {
  category: string;
  title: string;
  description: string;
  company: string;
  image: string;
};

export type SheetData = {
  products: Product[];
  categories: string[];
};

export async function getSheetProducts(): Promise<SheetData> {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Sheet1";

  if (!apiKey || !spreadsheetId) {
    console.warn("Google Sheets env vars not set — returning empty data.");
    return { products: [], categories: [] };
  }

  const range = encodeURIComponent(sheetName);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error(`Google Sheets API error: ${res.status} ${res.statusText}`);
      return { products: [], categories: [] };
    }

    const json = await res.json();
    const rows: string[][] = json.values ?? [];

    if (rows.length < 2) return { products: [], categories: [] };

    const headers = rows[0].map((h: string) => h.toLowerCase().trim());
    const idx = {
      category: headers.indexOf("category"),
      product: headers.indexOf("product"),
      description: headers.indexOf("description"),
      company: headers.indexOf("company"),
      image: headers.indexOf("image"),
    };

    const products: Product[] = rows
      .slice(1)
      .filter((row) => row[idx.category]?.trim())
      .map((row) => ({
        category: row[idx.category]?.trim() ?? "",
        title: row[idx.product]?.trim() ?? "",
        description: row[idx.description]?.trim() ?? "",
        company: row[idx.company]?.trim() ?? "",
        image: row[idx.image]?.trim() ?? "",
      }));

    const categories = [...new Set(products.map((p) => p.category))];

    return { products, categories };
  } catch (err) {
    console.error("Failed to fetch Google Sheets data:", err);
    return { products: [], categories: [] };
  }
}
