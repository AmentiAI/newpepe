import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export interface SearchResult {
  slug: string;
  name: string;
  category: string;
  short_description: string;
}

export async function searchProducts(query: string): Promise<SearchResult[]> {
  try {
    const results = await sql`
      SELECT slug, name, category, short_description
      FROM products
      WHERE
        name ILIKE ${'%' + query + '%'} OR
        short_description ILIKE ${'%' + query + '%'} OR
        tags::text ILIKE ${'%' + query + '%'}
      LIMIT 5
    `;
    return results as SearchResult[];
  } catch {
    return [];
  }
}

export async function getProductFromDB(slug: string) {
  try {
    const result = await sql`
      SELECT * FROM products WHERE slug = ${slug} LIMIT 1
    `;
    return result[0] || null;
  } catch {
    return null;
  }
}

export { sql };
