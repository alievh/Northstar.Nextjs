import { Arimo } from "next/font/google";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface CheckoutYourOrderSectionProps {}

const CheckoutYourOrderSection: FC<CheckoutYourOrderSectionProps> = ({}) => {
  return (
    <section className="your-order-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className={arimo.className}>Your order</h4>
            <table className="table">
              <thead>
                <tr className={arimo.className}>
                  <th scope="col">Product</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Plain White Shirt</td>
                  <td>$59.00</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>$59.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>$59.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutYourOrderSection;
