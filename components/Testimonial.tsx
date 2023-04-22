import { Arimo, Baloo_2 } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });
const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface TestimonialProps {
  image: string;
  text: string;
  username: string;
}

const Testimonial: FC<TestimonialProps> = ({ image, text, username }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__picture">
        <Image
          src={`/images/${image}`}
          width={210}
          height={210}
          alt="testimonial picture"
          quality={100}
          style={{ marginRight: "48px" }}
        />
      </div>
      <div className="testimonial__text">
        <Image
          priority
          src="/images/quote2.svg"
          height={37}
          width={28}
          alt="Quote"
        />

        <p className={baloo.className}>{text}</p>
        <span className={`testimonial__username ${arimo.className}`}>
          {username}
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
