import { FC } from "react";
import Input from "../ui/Input";
import { Arimo } from "next/font/google";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface CheckoutBillingSectionProps {}

const CheckoutBillingSection: FC<CheckoutBillingSectionProps> = ({}) => {
  return (
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
                <Input id="fullname" required={true} name="fullname" />
              </div>
              <div className="form-street">
                <label htmlFor="street">
                  Street Address<span>*</span>
                </label>
                <Input
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
                <Input id="city" required={true} name="city" />
              </div>
              <div className="form-phone">
                <label htmlFor="phone">
                  Phone<span>*</span>
                </label>
                <Input id="phone" required={true} name="phone" />
              </div>
              <div className="form-email">
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <Input id="email" required={true} name="email" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutBillingSection;
