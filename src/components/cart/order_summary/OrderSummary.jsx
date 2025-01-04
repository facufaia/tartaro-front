"use client";
import { useEffect } from "react";
import { useCartStore } from "@/stores/useCart";
import ItemList from "./ItemList";
import CouponSection from "./CouponSection";
import SummaryDetails from "./SummaryDetails";
import ActionButtons from "./ActionButtons";

export default function OrderSummary() {
  const calculateTotal = useCartStore((state) => state.calculateTotal);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    calculateTotal();
  }, [items, calculateTotal]);

  return (
    <div className="lg:col-span-1">
      <div className="rounded-lg sticky top-4">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4 mb-4">
          <ItemList />
          <CouponSection />
          <SummaryDetails />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
