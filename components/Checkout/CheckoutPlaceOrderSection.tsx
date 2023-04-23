import { FC } from "react";
import Button from "../ui/Button";

interface CheckoutPlaceOrderSectionProps {}

const CheckoutPlaceOrderSection: FC<CheckoutPlaceOrderSectionProps> = ({}) => {
  return (
    <section className="place-order-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="place-order-container">
              <div className="cash-on-container">
                <p>
                  Cash on delivery. Please contact us if you require assistance
                  or wish to make alternate arrangements.
                </p>
              </div>
              <div className="place-order-button">
                <Button type="submit" form="checkout-form" >Place Order</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPlaceOrderSection;
