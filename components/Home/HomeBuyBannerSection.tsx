import { FC } from "react";
import BuyBanner from "../BuyBanner";

interface HomeBuyBannerSectionProps {}

const HomeBuyBannerSection: FC<HomeBuyBannerSectionProps> = ({}) => {
  return (
    <section className="buybanner-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <BuyBanner
              containerClass="p-150"
              header="peace of mind"
              text="A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind."
            />
          </div>
          <div className="col-lg-5">
            <BuyBanner
              containerClass="p-50"
              header="Buy 2 Get 1 Free"
              text="End of season sale. Buy any 2 items of your choice and get 1 free."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBuyBannerSection;
