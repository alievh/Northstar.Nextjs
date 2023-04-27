import { FC } from "react";
import AboutBuyBannerSection from "@/components/About/AboutBuyBannerSection";
import AboutBannerSection from "@/components/About/AboutBannerSection";
import AboutFoundersSection from "@/components/About/AboutFoundersSection";
import AboutTestimonialsSection from "@/components/About/AboutTestimonialsSection";
import Head from "next/head";

interface aboutProps {}

const About: FC<aboutProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Northstar | About</title>
        <meta name="description" content="Northstart E-commerce" />
      </Head>
      <>
        <AboutBannerSection />
        <AboutBuyBannerSection />
        <AboutFoundersSection />
        <AboutTestimonialsSection />
      </>
    </>
  );
};

export default About;
