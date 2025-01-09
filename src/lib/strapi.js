import { STRAPI_URL, STRAPI_TOKEN } from "@/lib/constants";

if (!STRAPI_URL || !STRAPI_TOKEN) {
  throw new Error("Missing Strapi environment variables");
}

export async function query(url) {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${url}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 3600 },
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

// export async function getSiteSettings() {
//   const res = await fetch(`${STRAPI_URL}/api/site-setting?populate=logo`);
//   const data = await res.json();
//   console.log(data);
//   return "s";
// }
