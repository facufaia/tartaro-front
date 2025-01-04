import FilterBar from "@/components/product/FilterBar";
import ProductGrid from "@/components/product/ProductGrid";
import { fetchProducts, fetchCollection } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function ProductList({ searchParams }) {
  const { category, color, size, sort } = searchParams;

  const products = await fetchProducts(searchParams);
  const { data } = await fetchCollection("categories");
  const res = await fetchCollection("filters");

  const categories = data;
  const atributes = res.data;

  return (
    <div className="container mx-auto py-12 px-6 md:px-8">
      <FilterBar
        initialFilters={(category, color, size, sort)}
        categories={categories}
        atributes={atributes}
      />
      <ProductGrid initialProducts={products} />
    </div>
  );
}
