import { FC } from "react";
import BannerImage from "../assets/images/contact_banner.jpg"
import PageHeadBanner from "@/components/PageHeadBanner";

interface contactProps {}

const contact: FC<contactProps> = ({}) => {
  return (
    <main>
      <section className="contact-banner-section">
        <PageHeadBanner src={BannerImage.src} heading="Contact Us" />
      </section>
    </main>
  );
};

export default contact;
