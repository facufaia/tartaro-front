import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const { items } = await req.json();

    // const controller = new ProductController();

    // const products = await controller.validateProducts(items);
    // hay que obtener el total y agregar los productos
    // a los detalles de factura

    console.log(process.env.STRIPE_SECRET_KEY);

    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

    const priceToSet = 1000;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: priceToSet,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log(paymentIntent);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
}
