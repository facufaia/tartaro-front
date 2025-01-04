import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function ActionButtons() {
  const { toast } = useToast();
  const clearCart = useCartStore((state) => state.clearCart);
  const clearDiscount = useCartStore((state) => state.clearDiscount);
  const calculateTotal = useCartStore((state) => state.calculateTotal);
  const items = useCartStore((state) => state.items);

  const isCartEmpty = items.length === 0;
  console.log(isCartEmpty);

  return (
    <div className="space-y-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className={`w-full ${
                isCartEmpty
                  ? "cursor-not-allowed"
                  : "hover:text-primary hover:bg-transparent transition-colors duration-200 ease-in-out"
              }`}
              disabled={isCartEmpty}
            >
              Proceed to Checkout
            </Button>
          </TooltipTrigger>
          {isCartEmpty && (
            <TooltipContent>
              <p>Add items to cart to checkout</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      <Button
        variant="ghost"
        className="w-full hover:text-primary hover:bg-transparent transition-colors duration-200 ease-in-out"
        disabled={isCartEmpty}
        onClick={() => {
          clearCart();
          clearDiscount();
          calculateTotal();
          toast({
            title: "Cart cleared",
            description: "All items have been removed from your cart",
            duration: 3000,
          });
        }}
      >
        Clear Cart
      </Button>
    </div>
  );
}

{
  /* <Link
									href={
										status === 'authenticated'
											? '/checkout'
											: `/login?redirect=checkout`
									}
									className='bg-green-700 flex items-center justify-center h-12 w-full md:w-1/2'
								>
									CHECKOUT
								</Link> */
}
