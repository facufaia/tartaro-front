"use client";
import { useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import PaginationControls from "@/components/product/PaginationControls";
import { useProductStore } from "@/stores/useProducts";

export default function ProductGrid({ initialProducts }) {
  const products = useProductStore((state) => state.products);
  const meta = useProductStore((state) => state.meta);
  const setInitialState = useProductStore((state) => state.setInitialState);
  const isLoading = useProductStore((state) => state.isLoading);

  // Set initial server data
  useEffect(() => {
    setInitialState(initialProducts);
  }, []);

  // Use client state if available, fallback to server data
  const displayProducts = products.length > 0 ? products : initialProducts.data;
  const displayMeta = meta || initialProducts.meta;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {displayMeta && (
        <PaginationControls
          pageCount={displayMeta.pagination.pageCount}
          currentPage={displayMeta.pagination.page}
          pageSize={displayMeta.pagination.pageSize}
          total={displayMeta.pagination.total}
        />
      )}
    </div>
  );
}
