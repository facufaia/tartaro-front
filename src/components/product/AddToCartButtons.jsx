import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function AddToCartButtons({ price, stock, onAddToCart }) {
  return (
    <div className="w-full md:flex md:flex-col space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">${price.toFixed(2)}</span>
      </div>
      <div className="flex gap-6">
        <Button size="lg" className="w-full" disabled={!stock}>
          Buy Now
        </Button>
        <Button
          size="lg"
          className="w-full flex-1"
          disabled={!stock}
          onClick={onAddToCart}
        >
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
