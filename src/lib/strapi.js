const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL || !STRAPI_TOKEN) {
  throw new Error("Missing Strapi environment variables");
}

export async function query(url) {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Strapi API error: ${res.status} /api/${url}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Strapi query error:", error);
    throw error;
  }
}
