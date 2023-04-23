import { FC } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Input from "../ui/Input";
import { Arimo, Baloo_2 } from "next/font/google";
import { BasketType } from "@/types/basket.type";
import { BasketItemType } from "@/types/basketItem.type";
import { ChangeQuantityBasket, RemoveFromBasket } from "@/store/Basket/BasketSlice";
import { useDispatch } from "react-redux";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });

interface CartProductsSectionProps {
  basket: BasketType;
}

const CartProductsSection: FC<CartProductsSectionProps> = ({ basket }) => {
  const dispatch = useDispatch();

  const removeFromBasketHandler = (id: number) => {
    RemoveFromBasket(dispatch, id);
  };

  const changeQuantityBasket = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = event.target;
    ChangeQuantityBasket(dispatch, +id, +value);
  }

  return (
    <section className="cart-products-section">
      <div className="container">
        <table className="table">
          <thead>
            <tr className={arimo.className}>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {basket.products !== undefined && basket.products !== null
              ? basket.products.map((product: BasketItemType) => (
                  <tr key={product.id}>
                    <td scope="row">
                      <Button
                        onClick={() => removeFromBasketHandler(product.id)}
                        className="remove-button"
                        type="button"
                      >
                        x
                      </Button>
                    </td>

                    <td className="product-image">
                      <Image
                        src={`/images/${product.image}`}
                        alt="product picture"
                        width={40}
                        height={40}
                      />
                    </td>
                    <td className={`${baloo.className} product-name`}>
                      {product.name}
                    </td>
                    <td className="product-price">
                      ${product.discountPrice.toFixed(2)}
                    </td>
                    <td>
                      <Input
                        id={product.id.toString()}
                        className="product-quantity-input"
                        type="number"
                        defaultValue={product.quantity}
                        onChange={changeQuantityBasket}
                        min={1}
                      />
                    </td>
                    <td>
                      ${(product.discountPrice * product.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CartProductsSection;
