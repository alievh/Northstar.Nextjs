import { FC } from "react";
import Founder from "../Founder";
import { Arimo } from "next/font/google";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface AboutFoundersSectionProps {}

const AboutFoundersSection: FC<AboutFoundersSectionProps> = ({}) => {
  return (
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
  );
};

export default AboutFoundersSection;
