import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/useCart";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CouponSection() {
  const getTotal = useCartStore((state) => state.getTotal);
  const setDiscount = useCartStore((state) => state.setDiscount);
  const discount = useCartStore((state) => state.discount);
  const items = useCartStore((state) => state.items);
  const [couponCode, setCouponCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const { toast } = useToast();

  const isCouponApplied = discount > 0;
  const isCartEmpty = items.length === 0;

  const handleApplyCoupon = () => {
    setIsApplying(true);
    setTimeout(() => {
      if (couponCode.toLowerCase() === "discount10") {
        setDiscount(0.1);
        toast({
          title: "Coupon applied!",
          description: "10% discount has been applied to your order",
          duration: 3000,
        });
      } else {
        toast({
          title: "Invalid coupon",
          description: "Please enter a valid coupon code",
          variant: "destructive",
          duration: 3000,
        });
      }
      setIsApplying(false);
    }, 500);
  };

  return (
    <div className="space-y-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex gap-2">
              <Input
                placeholder="Enter coupon code"
                className="hover:border-primary hover:bg-transparent transition-colors duration-200 ease-in-out focus-visible:ring-primary"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                disabled={isCouponApplied || isCartEmpty}
              />
              <Button
                variant="outline"
                className="hover:border-primary hover:text-primary hover:bg-transparent transition-colors duration-200 ease-in-out"
                onClick={handleApplyCoupon}
                disabled={
                  !couponCode || isApplying || isCouponApplied || isCartEmpty
                }
              >
                {isApplying ? "Applying..." : "Apply"}
              </Button>
            </div>
          </TooltipTrigger>
          {isCartEmpty && (
            <TooltipContent>
              <p>Add items to cart to use coupons</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
      {isCouponApplied && (
        <p className="text-sm text-green-600">Coupon discount applied</p>
      )}
    </div>
  );
}
