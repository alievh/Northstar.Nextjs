import { FC } from "react";
import ExpandNavigation from "../ExpandNavigation";

interface CheckoutExpandNavigationSectionProps {}

const CheckoutExpandNavigationSection: FC<
  CheckoutExpandNavigationSectionProps
> = ({}) => {
  return (
    <section className="expand-navigation-section">
      <div className="container">
        <ExpandNavigation pageName="Checkout" />
      </div>
    </section>
  );
};

export default CheckoutExpandNavigationSection;
