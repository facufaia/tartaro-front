import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/order_summary/OrderSummary";

export default function Cart() {
  return (
    <div className="mx-auto py-12 px-8 md:px-16 min-h-svh">
      <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <CartItems />
        <OrderSummary />
      </div>
    </div>
  );
}
