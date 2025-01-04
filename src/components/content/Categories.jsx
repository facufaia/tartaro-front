import Link from "next/link";
import { fetchCollection } from "@/lib/api";

export default async function Categories() {
  const { data } = await fetchCollection("categories");
  console.log(data);
  const categories = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
      {categories &&
        categories.map((category) => (
          <Link
            href={`/products?category=${category.name}`}
            className="group relative"
            key={category.id}
          >
            <div key={category.id}>
              <div className="cursor-pointer group">
                <div className="relative rounded-lg overflow-hidden hover:scale-110 hover:-translate-y-5 transition-transform duration-300 ease-in-out">
                  <img
                    src={`http://localhost:1337${category.image.url}`}
                    alt={category.name}
                    className="rounded-lg min-w-[65svw] sm:min-w-[30svw] md:min-w-[20svw] h-[300px] object-cover group-hover:shadow-primary shadow-md transition-shadow duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 rounded-md bg-black/20 hover:bg-[#913a20]/20 transition-all opacity-100 duration-300 ease-in-out" />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-center transition-colors duration-300 group-hover:text-primary">
                  {category.name.toUpperCase()}
                </h3>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
