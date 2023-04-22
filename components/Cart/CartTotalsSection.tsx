import { Arimo, Baloo_2 } from "next/font/google";
import Link from "next/link";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });

interface CartTotalsSectionProps {}

const CartTotalsSection: FC<CartTotalsSectionProps> = ({}) => {
  return (
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
  );
};

export default CartTotalsSection;
