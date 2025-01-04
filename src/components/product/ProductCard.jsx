"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getColorHex, capitalizeFirstLetter } from "@/lib/helpers";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function ProductCard({ product }) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [api, setApi] = useState(null);

  const handleColorClick = (color, index) => {
    setSelectedColor(color);
    api?.scrollTo(index); // Esto moverá el carrusel al índice seleccionado
  };

  const handleProductClick = (e) => {
    // Prevent navigation if clicking color buttons
    if (e.target.closest("button")) return;
    router.push(`/products/${product.id}`);
  };

  return (
    <Link
      className={`rounded-lg cursor-pointer relative min-h-max group  border-2 border-transparent transition-colors duration-300 ease-in-out hover:shadow-md ${
        product.stock
          ? "hover:shadow-primary hover:border-primary"
          : "hover:shadow-red-800 hover:border-red-800"
      }`}
      href={`/products/${product.id}`}
      // onClick={handleProductClick}
    >
      <div className="relative">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {product.images.map(({ url }, index) => (
              <CarouselItem key={url}>
                <img
                  src={`http://localhost:1337${url}`}
                  alt={`${product.name} `}
                  className="w-full h-[250px] object-cover rounded-t-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {!product.stock && (
          <Badge
            variant="destructive"
            className="absolute top-2 right-2 z-10 cursor-default group-hover:scale-125 group-hover:translate-y-1 group-hover:-translate-x-3 transition-transform duration-300 ease-in-out"
          >
            Sold Out
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <CardTitle
          className={`text-xl font-bold mb-2 ${
            product.stock &&
            "group-hover:text-primary transition-colors duration-300 ease-in-out"
          }`}
        >
          {capitalizeFirstLetter(product.name)}
        </CardTitle>
        <CardDescription>
          <p>{capitalizeFirstLetter(product.category.name)}</p>
          <div className="flex items-center gap-2 my-2">
            <span className="text-sm">Colors:</span>
            <div className="flex gap-1">
              <TooltipProvider>
                {product.colors.map((color, index) => (
                  <Tooltip key={color}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleColorClick(color, index)}
                        className={`w-6 h-6 rounded-full border-2 ${
                          selectedColor === color && product.stock
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                        style={{
                          backgroundColor: getColorHex(color),
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{capitalizeFirstLetter(color)}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
          <div className="flex gap-2">
            {/* Size badges */}
            {product.sizes.map((size) => (
              <div
                key={size}
                className="px-2 text-base rounded-sm border border-foreground/20"
              >
                {size.toUpperCase()}
              </div>
            ))}
          </div>
          <p
            className={`font-semibold text-lg mt-6
            ${product.stock && "text-foreground"}`}
          >
            ${product.price.toFixed(2)}
          </p>
        </CardDescription>
      </CardContent>
    </Link>
  );
}
