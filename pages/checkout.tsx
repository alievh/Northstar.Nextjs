import CheckoutBillingSection from "@/components/Checkout/CheckoutBillingSection";
import CheckoutExpandNavigationSection from "@/components/Checkout/CheckoutExpandNavigationSection";
import CheckoutPlaceOrderSection from "@/components/Checkout/CheckoutPlaceOrderSection";
import CheckoutYourOrderSection from "@/components/Checkout/CheckoutYourOrderSection";
import { RootState } from "@/store";
import { BasketType } from "@/types/basket.type";
import Head from "next/head";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBasket } from "@/store/Basket/BasketSlice";

interface checkoutProps {}

const Checkout: FC<checkoutProps> = ({}) => {
  const dispatch = useDispatch();
  const basket: BasketType = useSelector<RootState, BasketType>(
    (state: any) => state.BasketSlice.basket
  );

  useEffect(() => {
    getBasket(dispatch);
  }, []);

  return (
    <>
      <Head>
        <title>Northstar | Checkout</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <>
        <CheckoutExpandNavigationSection />
        <CheckoutBillingSection />
        <CheckoutYourOrderSection basket={basket} />
        <CheckoutPlaceOrderSection />
      </>
    </>
  );
};

export default Checkout;
