import { FC } from "react";
import Testimonial from "../Testimonial";
import { Arimo } from "next/font/google";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface AboutTestimonialsSectionProps {}

const AboutTestimonialsSection: FC<AboutTestimonialsSectionProps> = ({}) => {
  return (
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
  );
};

export default AboutTestimonialsSection;
