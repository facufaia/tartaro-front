import FeaturedCarousel from "@/components/product/FeaturedCarousel";
import HomeHero from "@/components/content/HomeHero";
import Categories from "@/components/content/Categories";
import { fetchSingle, fetchProducts } from "@/lib/api";
//fetchProducts

export default async function Home() {
  const { data } = await fetchSingle("home");
  const { categories_title, product_title } = data;
  const res = await fetchProducts("products", {
    filters: { featured: true },
    pagination: { page: 1, pageSize: 4 },
  });

  return (
    <main>
      <HomeHero />
      <section className="triangle bg-gradient-to-t to-transparent from-primary"></section>
      <section className="py-24 bg-gradient-to-b from-primary/50 ">
        <div className="container mx-auto flex flex-col items-center gap-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">
            {categories_title}
          </h2>
          <Categories />
        </div>
      </section>
      <section className="py-12 px-6 md:px-8">
        <div className="container mx-auto flex flex-col gap-10 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">
            {product_title}
          </h2>
          <FeaturedCarousel products={res.data} />
        </div>
      </section>
    </main>
  );
}
