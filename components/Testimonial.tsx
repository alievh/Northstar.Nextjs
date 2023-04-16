import { Arimo, Baloo_2 } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });
const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface TestimonialProps {
  image: string,
  text: string,
  username: string
}

const Testimonial: FC<TestimonialProps> = ({image, text, username}) => {
  return (
    <div className="testimonial">
      <div className="testimonial__picture">
        <Image
          src={require(`../assets/images/${image}`)}
          width={"210"}
          height={"210"}
          alt="testimonial picture"
          style={{ marginRight: "48px" }}
        />
      </div>
      <div className="testimonial__text">
        <svg
          width="37"
          height="28"
          viewBox="0 0 37 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.621 19.1646C36.369 18.3886 35.932 17.6776 35.324 17.0346C34.687 16.3626 33.85 15.8426 32.812 15.4666C31.773 15.0936 30.439 14.9046 28.795 14.9046H26.564C26.83 12.1586 27.808 9.8216 29.5 7.8896C31.189 5.96359 33.531 4.26859 36.525 2.81459L34.709 0.000595093C30.767 1.6796 27.394 4.13559 24.592 7.37959C21.791 10.6266 20.396 13.8436 20.396 17.0346C20.396 20.4626 21.205 23.1516 22.836 25.0926C24.467 27.0336 26.803 28.0006 29.84 28.0006C31.767 28.0006 33.441 27.3576 34.865 26.0726C36.287 24.7896 37 23.2866 37 21.5726C37 20.7456 36.875 19.9406 36.621 19.1646ZM16.225 19.1646C15.971 18.3886 15.535 17.6776 14.926 17.0346C14.291 16.3626 13.453 15.8426 12.414 15.4666C11.377 15.0936 10.043 14.9046 8.39801 14.9046H6.16602C6.43302 12.1586 7.41001 9.8216 9.10101 7.8896C10.791 5.96359 13.135 4.26859 16.127 2.81459L14.312 0.000595093C10.369 1.6796 6.99801 4.13559 4.19501 7.37959C1.39401 10.6266 0 13.8436 0 17.0346C0 20.4626 0.806995 23.1516 2.439 25.0926C4.068 27.0336 6.40402 28.0006 9.44302 28.0006C11.369 28.0006 13.045 27.3576 14.469 26.0726C15.891 24.7896 16.603 23.2866 16.603 21.5726C16.603 20.7456 16.476 19.9406 16.225 19.1646Z"
            fill="black"
          />
        </svg>

        <p className={baloo.className}>
          {text}
        </p>
        <span className={`testimonial__username ${arimo.className}`}>
          {username}
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
