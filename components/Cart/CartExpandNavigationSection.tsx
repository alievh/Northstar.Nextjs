import { FC } from "react";
import ExpandNavigation from "../ExpandNavigation";

interface CartExpandNavigationSectionProps {}

const CartExpandNavigationSection: FC<
  CartExpandNavigationSectionProps
> = ({}) => {
  return (
    <section className="expand-navigation-section">
      <div className="container">
        <ExpandNavigation pageName="Shopping Cart" />
      </div>
    </section>
  );
};

export default CartExpandNavigationSection;
