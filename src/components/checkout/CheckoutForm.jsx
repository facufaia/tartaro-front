"use client";
import {
  useStripe,
  useElements,
  PaymentElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { data } = useSession();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addressElementOptions = {
    mode: "shipping",
  }; // esto funciona pero no toma apperance

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payme+nt is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/",
        receipt_email: data.user.email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  }; // esto parece que esta al pedo https://stripe.com/docs/payments/quickstart?client=next components/CheckoutForm.jsx

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="p-12 flex flex-col justify-center gap-4 items-center"
    >
      <PaymentElement
        id="payment-element"
        options={paymentElementOptions}
        className="w-full"
      />
      <AddressElement
        id="address-element"
        options={addressElementOptions}
        className="w-full"
      />
      {isLoading ? (
        <div className="spinner" id="spinner" />
      ) : (
        <Button
          // disabled={isLoading || !stripe || !elements}
          disabled={true}
          id="submit"
          className="w-full"
        >
          Pay
        </Button>
      )}
      {/* Show any error or success messages */}
      {/* {message && <div id='payment-message'>{message}</div>} */}
    </form>
  );
}
