import { useCartStore } from "@/stores/useCart";

export default function SummaryDetails() {
  const discount = useCartStore((state) => state.discount);
  const total = useCartStore((state) => state.total);
  const subtotal = useCartStore((state) => state.subtotal);

  return (
    <div className="border-t pt-4 space-y-2">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      {discount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-${(subtotal * discount).toFixed(2)}</span>
        </div>
      )}

      <div className="border-t pt-2 flex justify-between font-semibold">
        <span>Total</span>
        <span>${total && total.toFixed(2)}</span>
      </div>
    </div>
  );
}
