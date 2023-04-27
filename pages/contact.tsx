import { FC } from "react";
import ContactBannerSection from "@/components/Contact/ContactBannerSection";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import Head from "next/head";

interface contactProps {}

const Contact: FC<contactProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Northstar | Contact</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <>
        <ContactBannerSection />
        <ContactFormSection />
      </>
    </>
  );
};

export default Contact;
