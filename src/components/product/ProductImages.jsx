import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

export default function ProductImages({ images, stock }) {
  const [api, setApi] = useState(null);

  return (
    <div className="h-[60svh] relative">
      <Carousel className="w-full h-[65svh]" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={`http://localhost:1337${image.url}`}
                alt={`Product View ${index + 1}`}
                className="w-full h-[65svh] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="h-8 w-8 left-2" />
            <CarouselNext className="h-8 w-8 right-2" />
          </>
        )}
      </Carousel>
      <Badge
        variant={stock ? "default" : "destructive"}
        className="absolute left-2 top-2 z-10"
      >
        {stock ? "In Stock" : "Sold Out"}
      </Badge>
    </div>
  );
}
