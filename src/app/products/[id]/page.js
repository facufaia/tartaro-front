import { fetchCollection } from "@/lib/api";
import SingleProductClient from "@/components/product/SingleProductClient";
import RelatedProducts from "@/components/product/RelatedProducts";

export const dynamic = "force-dynamic";

export default async function SingleProduct({ params }) {
  const { data } = await fetchCollection("products", {
    filters: {
      id: {
        $eq: params.id,
      },
    },
  });

  if (!data[0]) {
    return <div>Product not found</div>;
  }

  // Fetch related products
  const { data: relatedProducts } = await fetchCollection("products", {
    filters: {
      category: {
        name: {
          $eq: data[0].category.name,
        },
      },
      id: {
        $ne: params.id, // Exclude current product
      },
    },
    pagination: {
      pageSize: 8, // Limit related products
    },
    populate: "*",
  });

  return (
    <main className="container mx-auto min-h-svh">
      <SingleProductClient product={data[0]} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </main>
  );
}
