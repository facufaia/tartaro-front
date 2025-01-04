"use client";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/useCart";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default function CartItems() {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const items = useCartStore((state) => state.items);
  const { toast } = useToast();

  const handleRemoveItem = (item) => {
    removeFromCart(item);
    toast({
      title: "Item removed",
      description: `${item.name} has been removed from your cart`,
      duration: 3000,
    });
  };

  if (items.length === 0) {
    return (
      <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-4 min-h-[400px] border-2 border-dashed rounded-lg p-8">
        <ShoppingCart className="w-16 h-16 text-gray-400" />
        <h3 className="text-xl font-semibold text-foreground">
          Your cart is empty
        </h3>
        <p className="text-muted-foreground hidden md:block md:text-center">
          Looks like you haven't added anything yet
        </p>
        <Link href="/products">
          <Button variant="default" className="mt-4">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="lg:col-span-2 space-y-4">
      {items.map((item) => (
        <div
          key={`${item.id}-${item.color}-${item.size}`}
          className="flex gap-4 md:gap-6 items-center rounded-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-36 h-36 md:w-24 md:h-24 object-cover rounded-md"
          />
          <section className="py-4 flex-1 flex flex-col md:flex-row md:items-center md:justify-between items-start justify-center gap-4 flex-wrap">
            <div>
              <h3 className="font-semibold">
                {capitalizeFirstLetter(item.name)}
              </h3>
              <p className="text-muted-foreground">
                Color: {capitalizeFirstLetter(item.color)}, Size: {item.size}
              </p>
              <p className="font-semibold mt-4 text-muted-foreground">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary hover:bg-transparent transition-colors duration-200 ease-in-out"
                  onClick={() => {
                    item.quantity === 1
                      ? handleRemoveItem(item)
                      : updateQuantity(item, Math.max(1, item.quantity - 1));
                  }}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary hover:bg-transparent transition-colors duration-200 ease-in-out"
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-transparent transition-colors duration-200 ease-in-out"
                onClick={() => handleRemoveItem(item)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
