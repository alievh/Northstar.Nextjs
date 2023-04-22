import CheckoutBillingSection from "@/components/Checkout/CheckoutBillingSection";
import CheckoutExpandNavigationSection from "@/components/Checkout/CheckoutExpandNavigationSection";
import CheckoutPlaceOrderSection from "@/components/Checkout/CheckoutPlaceOrderSection";
import CheckoutYourOrderSection from "@/components/Checkout/CheckoutYourOrderSection";
import { Arimo } from "next/font/google";
import Head from "next/head";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface checkoutProps {}

const Checkout: FC<checkoutProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Northstar | Checkout</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <main>
        <CheckoutExpandNavigationSection />
        <CheckoutBillingSection />
        <CheckoutYourOrderSection />
        <CheckoutPlaceOrderSection />
      </main>
    </>
  );
};

export default Checkout;
