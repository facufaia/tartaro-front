"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/stores/useCart";
import CheckoutForm from "@/components/checkout/CheckoutForm.jsx";

import ItemList from "@/components/cart/order_summary/ItemList";
import SummaryDetails from "@/components/cart/order_summary/SummaryDetails";

const stripePromise = loadStripe(
  "pk_test_51N4GXWIfDBWEGt9putEjLbRgNinQRfzyF2KX2fwgFH1DuQ0ZEYR1INzTmq442mLz52m6pPKDqWzjvaV4aZIlZOQb0056wkABPF"
);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const { items } = useCartStore((state) => state.items);

  useEffect(() => {
    const paymentIntent = async ({ items }) => {
      const response = await fetch("api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });
      console.log(items);
      const data = await response.json();
      console.log(data);
      setClientSecret(data.clientSecret);
    };
    paymentIntent({ items });
  }, []);

  const appearance = {
    theme: "night",
    variables: {
      fontFamily: "Roboto, sans-serif",
      fontLineHeight: "1.5",
      borderRadius: "25",
      colorBackground: "#020817",
      focusBoxShadow: "none",
      colorPrimary: "#eb5e33",
      iconColor: "ff900",
      tabIconSelectedColor: "white",
      logoColor: "dark",
      tabLogoColor: "dark",
    },
    rules: {
      ".Input, .CheckboxInput, .CodeInput": {
        transition: "none",
        boxShadow:
          "inset -1px -1px #b5b5b5, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080",
      },
      ".Label": {
        color: "#dbdbc6",
      },
      ".Input": {
        padding: "12px",
        width: "10px",
        boxShadow: "inset 0 0 0 1px #27272a",
      },
      ".Input--invalid": {
        color: "#DF1B41",
      },
      ".Tab, .Block, .PickerItem--selected": {
        boxShadow: "inset 0 0 0 1px #27272a",
      },
      ".Tab": {
        backgroundColor: "#020817",
        transition: "none",
      },
      ".TabLabel": {
        color: "curretnColor",
      },
      ".Tab:hover": {
        borderColor: "#eb5e33",
        backgroundColor: "#020817",
        color: "#eb5e33",
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        color: "#dbdbc6",
        backgroundColor: "#020817",
      },
      ".PickerItem": {
        backgroundColor: "#dfdfdf",
        boxShadow:
          "inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf",
        transition: "none",
      },
      ".PickerItem:hover": {
        backgroundColor: "#eee",
      },
      ".PickerItem--highlight": {
        outline: "1px solid blue",
      },
      ".PickerItem--selected:hover": {
        backgroundColor: "#dfdfdf",
      },
    },
  };

  // Pass the appearance object to the Elements instance
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <main className="container mx-auto min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col gap-6 px-6 md:px-8 py-20">
        <ItemList />
        <SummaryDetails />
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </main>
  );
}
