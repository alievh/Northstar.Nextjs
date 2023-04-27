import { FC } from "react";
import Input from "../ui/Input";
import { Arimo } from "next/font/google";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { BasketType } from "@/types/basket.type";
import { OrderType } from "@/types/order.type";
import { clearBasket } from "@/store/Basket/BasketSlice";
import Notiflix from "notiflix";
import { CheckoutType } from "@/types/checkout.type";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface CheckoutBillingSectionProps {}

const CheckoutBillingSection: FC<CheckoutBillingSectionProps> = ({}) => {
  const dispatch = useDispatch();
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutType>({
    fullname: "",
    street: "",
    city: "",
    phone: "",
    email: "",
  });

  const basket = useSelector<RootState, BasketType>(
    (state: any) => state.BasketSlice.basket
  );

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const order: OrderType = {
      billingDetail: checkoutInfo,
      basket: basket,
    };

    setCheckoutInfo({
      fullname: "",
      street: "",
      city: "",
      phone: "",
      email: "",
    });
    clearBasket(dispatch);
    console.log(JSON.stringify(order));

    Notiflix.Report.success(
      "Order accepted",
      "Your order accepted successfully check console :D",
      "Okay",
      {
        svgSize: "35px",
      }
    );
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
                  value={checkoutInfo.fullname}
                  onChange={(event) => setCheckoutInfo({...checkoutInfo, fullname: event.target.value})}
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
                  value={checkoutInfo.street}
                  onChange={(event) => setCheckoutInfo({...checkoutInfo, street: event.target.value})}
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
                  value={checkoutInfo.city}
                  onChange={(event) => setCheckoutInfo({...checkoutInfo, city: event.target.value})}
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
                  value={checkoutInfo.phone}
                  onChange={(event) => setCheckoutInfo({...checkoutInfo, phone: event.target.value})}
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
                  value={checkoutInfo.email}
                  onChange={(event) => setCheckoutInfo({...checkoutInfo, email: event.target.value})}
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
