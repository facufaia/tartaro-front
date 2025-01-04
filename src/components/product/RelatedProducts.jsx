"use client";
import FeaturedCarousel from "@/components/product/FeaturedCarousel";

export default function RelatedProducts({ relatedProducts }) {
  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-12 px-6 md:px-0">
      <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
      <div className="container mx-auto flex flex-col gap-10">
        <FeaturedCarousel products={relatedProducts} />
      </div>
    </section>
  );
}
