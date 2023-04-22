import { FC } from "react";
import PageHeadBanner from "../PageHeadBanner";

interface ContactBannerSectionProps {}

const ContactBannerSection: FC<ContactBannerSectionProps> = ({}) => {
  return (
    <section className="contact-banner-section">
      <PageHeadBanner src={"/images/contact_banner.jpg"} heading="Contact Us" />
    </section>
  );
};

export default ContactBannerSection;
