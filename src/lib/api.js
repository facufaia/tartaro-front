import { query } from "@/lib/strapi";
import qs from "qs";

export const fetchCollection = async (collection, params = {}) => {
  const { filters, pagination, sort, populate = "*" } = params;

  const queryObject = {
    populate,
    ...(pagination && { pagination }),
    ...(filters && { filters }),
    ...(sort && { sort }),
  };

  const queryString = qs.stringify(queryObject, { encodeValuesOnly: true });
  console.log(`LLAMADO A LA API 
  STRING: ${collection}?${queryString}`);

  return query(`${collection}?${queryString}`);
};

// Single types
export const fetchSingle = async (type) => {
  return query(type);
};

// Client-specific fetchers with URL sync
export const fetchProducts = async (searchParams = {}) => {
  const queryObject = {
    populate: "*",
    pagination: {
      page: parseInt(searchParams.page || 1),
      pageSize: parseInt(searchParams.pageSize || 12),
    },
    filters: {},
  };

  if (searchParams.category)
    queryObject.filters.category = {
      name: { $eq: searchParams.category },
    };
  if (searchParams.color)
    queryObject.filters.colors = {
      $contains: searchParams.color,
    };

  if (searchParams.size)
    queryObject.filters.sizes = {
      $contains: searchParams.size,
    };
  // if (searchParams.sort) queryObject.sort = searchParams.sort;

  return fetchCollection("products", queryObject);
};

// import { getSiteSettings } from "@/lib/strapi";
// export async function getSettings() {
//   const settings = await getSiteSettings();
//   return {
//     logo: "settings.logo.data.attributes.url",
//   };
// }
