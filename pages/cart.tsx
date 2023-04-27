import CartExpandNavigationSection from "@/components/Cart/CartExpandNavigationSection";
import CartProductsSection from "@/components/Cart/CartProductsSection";
import CartTotalsSection from "@/components/Cart/CartTotalsSection";
import { RootState } from "@/store";
import { getBasket } from "@/store/Basket/BasketSlice";
import { BasketType } from "@/types/basket.type";
import Head from "next/head";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface cartProps {}

const Cart: FC<cartProps> = ({}) => {
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
        <title>Northstar | Cart</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <>
        <CartExpandNavigationSection />
        {Object.keys(basket).length !== 0 && basket.count !== 0 ? (
          <>
            <CartProductsSection basket={basket} />
            <CartTotalsSection totalPrice={basket.total} />
          </>
        ) : (
          <div className="container">
            <div className="cart-no-item">
              <p>Add item to cart</p>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Cart;
