"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/product/ProductCard";
import Autoplay from "embla-carousel-autoplay";

export default function FeaturedCarousel({ products }) {
  return (
    <div className="relative">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products &&
            products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 lg:pl-6 md:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
