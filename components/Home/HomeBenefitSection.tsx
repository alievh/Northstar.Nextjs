import { FC } from "react";
import BenefitCard from "../BenefitCard";

interface HomeBenefitSectionProps {}

const HomeBenefitSection: FC<HomeBenefitSectionProps> = ({}) => {
  return (
    <section className="benefit-section">
      <div className="container">
        <div className="row">
          <BenefitCard
            icon="free_shipping.svg"
            header="Free Shipping"
            text="Enjoy free shipping on all orders above $100"
          />
          <BenefitCard
            icon="support.svg"
            header="SUPPORT 24/7"
            text="Our support team is there to help you for queries"
          />
          <BenefitCard
            icon="days_return.svg"
            header="30 DAYS RETURN"
            text="Simply return it within 30 days for an exchange."
          />
          <BenefitCard
            icon="payment_secure.svg"
            header="100% PAYMENT SECURE"
            text="Our payments are secured with 256 bit encryption"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBenefitSection;
