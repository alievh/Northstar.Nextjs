import ExpandNavigation from "@/components/ExpandNavigation";
import { FC } from "react";

interface checkoutProps {}

const checkout: FC<checkoutProps> = ({}) => {
  return (
      <main>
        <section className="expand-navigation-section">
        <div className="container">
          <ExpandNavigation pageName="Checkout" />
        </div>
      </section>
      </main>
  );
};

export default checkout;
