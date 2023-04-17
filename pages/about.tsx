import PageHeadBanner from "@/components/PageHeadBanner";
import { FC } from "react";
import BannerImage from "../assets/images/about_banner.jpg";
import Founder from "@/components/Founder";
import { Arimo } from "next/font/google";
import Testimonial from "@/components/Testimonial";
import FirstAboutBuyBannerImage from "../assets/images/aboutbuybanner1.jpg";
import SecondAboutBuyBannerImage from "../assets/images/aboutbuybanner2.jpg";
import AboutBuyBanner from "@/components/AboutBuyBanner";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface aboutProps {}

const About: FC<aboutProps> = ({}) => {
  return (
    <main>
      <section className="about-banner-section">
        <PageHeadBanner src={BannerImage.src} heading="About Northstar" />
      </section>
      <section className="about-buybanner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <AboutBuyBanner src={FirstAboutBuyBannerImage.src} />
            </div>
            <div className="col-lg-6">
              <AboutBuyBanner src={SecondAboutBuyBannerImage.src} />
            </div>
          </div>
        </div>
      </section>
      <section className="founders-section">
        <div className="container">
          <div className="row">
            <div className="founders-section__header">
              <h3 className={arimo.className}>The Founders</h3>
            </div>
          </div>
          <div className="row">
            <Founder image={"founder1.jpg"} fullname="HM Jawad" />
            <Founder image={"founder2.jpg"} fullname="Furqan Abid" />
            <Founder image={"founder3.jpg"} fullname="Abdullah Ah" />
            <Founder image={"founder4.jpg"} fullname="Abrar Khan" />
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container">
          <div className="row">
            <div className="testimonials-section__header">
              <h3 className={arimo.className}>Testimonials</h3>
            </div>
          </div>
          <div className="row">
            <Testimonial
              image="testimonial1.png"
              text="Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries."
              username="Stacy"
            />
            <Testimonial
              image="testimonial2.png"
              text="I ordered 5 shirts from them and received them in no time. The customer support was awesome!"
              username="Tiffany"
            />
            <Testimonial
              image="testimonial3.png"
              text="I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again."
              username="James"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
