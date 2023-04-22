import { FC } from "react";
import PageHeadBanner from "../PageHeadBanner";

interface AboutBannerSectionProps {}

const AboutBannerSection: FC<AboutBannerSectionProps> = ({}) => {
  return (
    <section className="about-banner-section">
      <PageHeadBanner
        src={"images/about_banner.jpg"}
        heading="About Northstar"
      />
    </section>
  );
};

export default AboutBannerSection;
