import { FC } from "react";

interface HomeBannerSectionProps {}

const HomeBannerSection: FC<HomeBannerSectionProps> = ({}) => {
  return (
    <section className="home-banner-section">
      <div
        className="home-banner-section__container"
        style={{ backgroundImage: "url('/images/home_banner.jpg')" }}
      >
        <div className="container d-flex justify-content-end">
          <div className="col-lg-5 home-banner-section__inside-container">
            <h2>stylist picks beat the heat</h2>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerSection;
