import { FC } from "react";
import AboutBuyBanner from "../AboutBuyBanner";

interface AboutBuyBannerSectionProps {}

const AboutBuyBannerSection: FC<AboutBuyBannerSectionProps> = ({}) => {
  return (
    <section className="about-buybanner-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <AboutBuyBanner src={"/images/aboutbuybanner1.jpg"} />
          </div>
          <div className="col-lg-6">
            <AboutBuyBanner src={"/images/aboutbuybanner2.jpg"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBuyBannerSection;
