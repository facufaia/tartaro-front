"use client";
import ProductImages from "@/components/product/ProductImages";
import ColorSelector from "@/components/product/ColorSelector";
import SizeSelector from "@/components/product/SizeSelector";
import AddToCartButtons from "@/components/product/AddToCartButtons";
import { useState } from "react";
import { useCartStore } from "@/stores/useCart";
import { useToast } from "@/hooks/use-toast";
import { capitalizeFirstLetter } from "@/lib/helpers";

export default function SingleProductClient({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState("m");
  const [api, setApi] = useState(null);
  const { toast } = useToast();

  const handleColorClick = (color, index) => {
    setSelectedColor(color);
    api?.scrollTo(index);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      image: product.images[0],
      quantity: 1,
    });

    toast({
      title: "Added to cart",
      description: `${product.name.toUpperCase()} - ${selectedColor}, Size ${selectedSize}`,
      duration: 3000,
    });
  };

  return (
    <section className="min-h-[70svh] py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImages images={product.images} stock={product.stock} />

        <div className="flex flex-col items-start justify-around h-[65svh] px-6 md:px-0">
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              {capitalizeFirstLetter(product.name)}
            </h1>
            <p className="text-lg text-gray-600 md:mb-4">
              {capitalizeFirstLetter(product.category.name)}
            </p>
          </div>

          <div className="space-y-6 w-full">
            <ColorSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onColorSelect={handleColorClick}
              stock={product.stock}
            />
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
              stock={product.stock}
            />
          </div>

          <AddToCartButtons
            price={product.price}
            stock={product.stock}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </section>
  );
}
