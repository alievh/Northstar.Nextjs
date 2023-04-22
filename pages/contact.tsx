import { FC } from "react";
import PageHeadBanner from "@/components/PageHeadBanner";
import { Arimo } from "next/font/google";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import ContactBannerSection from "@/components/Contact/ContactBannerSection";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import Head from "next/head";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface contactProps {}

const Contact: FC<contactProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Northstar | Contact</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <main>
        <ContactBannerSection />
        <ContactFormSection />
      </main>
    </>
  );
};

export default Contact;
