import { FC } from "react";
import Input from "../ui/Input";
import { Arimo } from "next/font/google";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { BasketType } from "@/types/basket.type";
import { BillingDetailType } from "@/types/billing-detail.type";
import { OrderType } from "@/types/order.type";
import { ClearBasket } from "@/store/Basket/BasketSlice";
import Notiflix from "notiflix";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface CheckoutBillingSectionProps {}

const CheckoutBillingSection: FC<CheckoutBillingSectionProps> = ({}) => {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [city, setCity] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();

  const basket = useSelector<RootState, BasketType>(
    (state: any) => state.BasketSlice.basket
  );

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const billingDetail: BillingDetailType = {
      fullname: fullname,
      street: street,
      city: city,
      phone: phone,
      email: email,
    };

    const order: OrderType = {
      billingDetail: billingDetail,
      basket: basket,
    };

    setFullname("");
    setStreet("");
    setCity("");
    setPhone("");
    setEmail("");
    ClearBasket(dispatch);
    console.log(JSON.stringify(order));

    Notiflix.Report.success(
      "Order accepted",
      'Your order accepted successfully check console :D',
      "Okay"
    , {
      svgSize: '35px',
    });
  };

  return (
    <section className="billing-details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4 className={arimo.className}>Billing details</h4>
            <form id="checkout-form" method="post" onSubmit={formSubmitHandler}>
              <div className="form-fullname">
                <label htmlFor="fullname">
                  Full Name<span>*</span>
                </label>
                <Input
                  id="fullname"
                  required={true}
                  name="fullname"
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                />
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
                  value={street}
                  onChange={(event) => setStreet(event.target.value)}
                />
              </div>
              <div className="form-city">
                <label htmlFor="city">
                  Town / City<span>*</span>
                </label>
                <Input
                  id="city"
                  required={true}
                  name="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
              <div className="form-phone">
                <label htmlFor="phone">
                  Phone<span>*</span>
                </label>
                <Input
                  id="phone"
                  required={true}
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="form-email">
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <Input
                  id="email"
                  required={true}
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutBillingSection;
