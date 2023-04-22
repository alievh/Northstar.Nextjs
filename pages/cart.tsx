import CartExpandNavigationSection from "@/components/Cart/CartExpandNavigationSection";
import CartProductsSection from "@/components/Cart/CartProductsSection";
import CartTotalsSection from "@/components/Cart/CartTotalsSection";
import { RootState } from "@/store";
import { GetBasket } from "@/store/Basket/BasketSlice";
import { BasketType } from "@/types/basket.type";
import Head from "next/head";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface cartProps {}

const Cart: FC<cartProps> = ({}) => {
  const dispatch = useDispatch();

  const basket = useSelector<RootState, BasketType[]>(
    (state: any) => state.BasketSlice.basket
  );

  useEffect(() => {
    GetBasket(dispatch);
  }, []);

  return (
    <>
      <Head>
        <title>Northstar | Cart</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <main>
        <CartExpandNavigationSection />
        <CartProductsSection />
        <CartTotalsSection />
      </main>
    </>
  );
};

export default Cart;
