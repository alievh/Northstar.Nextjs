import ExpandNavigation from "@/components/ExpandNavigation";
import { Arimo } from "next/font/google";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface checkoutProps {}

const checkout: FC<checkoutProps> = ({}) => {
  return (
    <main>
      <section className="expand-navigation-section">
        <div className="container">
          <ExpandNavigation pageName="Checkout" />
        </div>
      </section>
      <section className="billing-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className={arimo.className}>Billing details</h4>
              <form method="post">
                <div className="form-fullname">
                  <label htmlFor="fullname">
                    Full Name<span>*</span>
                  </label>
                  <input id="fullname" required={true} name="fullname" />
                </div>
                <div className="form-street">
                  <label htmlFor="street">
                    Street Address<span>*</span>
                  </label>
                  <input
                    id="street"
                    placeholder="House number and street name"
                    required={true}
                    name="street"
                  />
                </div>
                <div className="form-city">
                  <label htmlFor="city">
                    Town / City<span>*</span>
                  </label>
                  <input id="city" required={true} name="city" />
                </div>
                <div className="form-phone">
                  <label htmlFor="phone">
                    Phone<span>*</span>
                  </label>
                  <input id="phone" required={true} name="phone" />
                </div>
                <div className="form-email">
                  <label htmlFor="email">
                    Email Address<span>*</span>
                  </label>
                  <input id="email" required={true} name="email" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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
      <section className="place-order-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="place-order-container">
                <div className="cash-on-container">
                  <p>
                    Cash on delivery. Please contact us if you require
                    assistance or wish to make alternate arrangements.
                  </p>
                </div>
                <div className="place-order-button">
                  <button>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default checkout;
