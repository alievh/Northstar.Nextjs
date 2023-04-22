import { FC } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Input from "../ui/Input";
import { Arimo, Baloo_2 } from "next/font/google";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });

interface CartProductsSectionProps {}

const CartProductsSection: FC<CartProductsSectionProps> = ({}) => {
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
            <tr>
              <td scope="row">
                <Button className="remove-button" type="button">
                  x
                </Button>
              </td>

              <td className="product-image">
                <Image
                  src={"/images/product1.jpg"}
                  alt="product picture"
                  width={40}
                  height={40}
                />
              </td>
              <td className={`${baloo.className} product-name`}>
                Plain White Shirt
              </td>
              <td className="product-price">$59.00</td>
              <td>
                <Input
                  className="product-quantity-input"
                  type="number"
                  defaultValue={1}
                />
              </td>
              <td>$59.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CartProductsSection;
