import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/order_summary/OrderSummary";

export default function Cart() {
  return (
    <div className="container mx-auto py-12 min-h-svh px-6 md:px-8">
      <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <CartItems />
        <OrderSummary />
      </div>
    </div>
  );
}
