import ExpandNavigation from "@/components/ExpandNavigation";
import { Arimo, Baloo_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });

interface cartProps {}

const Cart: FC<cartProps> = ({}) => {
  return (
    <main>
      <section className="expand-navigation-section">
        <div className="container">
          <ExpandNavigation pageName="Shopping Cart" />
        </div>
      </section>
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
                  <button className="remove-button" type="button">
                    x
                  </button>
                </td>

                <td className="product-image">
                  <Image
                    src={require("../assets/images/product1.jpg")}
                    alt="product picture"
                    width={"40"}
                    height={"40"}
                  />
                </td>
                <td className={`${baloo.className} product-name`}>
                  Plain White Shirt
                </td>
                <td className="product-price">$59.00</td>
                <td>
                  <input className="product-quantity-input" defaultValue={1} />
                </td>
                <td>$59.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="cart-totals-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className={arimo.className}>Cart Totals</h4>
              <ul>
                <li>
                  <span>Subtotal</span>
                  <span>$59.00</span>
                </li>
                <li>
                  <span>Shipping Fee</span>
                  <span>FREE!!!</span>
                </li>
                <li>
                  <span className={arimo.className}>Total</span>
                  <span>$59.00</span>
                </li>
              </ul>
              <Link href="/checkout">Proceed To Checkout</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
