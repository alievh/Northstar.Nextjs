import { FC } from "react";

interface AboutBuyBannerProps {
  src: string;
}

const AboutBuyBanner: FC<AboutBuyBannerProps> = ({ src }) => {
  return (
    <div
      className="about-buybanner"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <a href="#">Buy Now</a>
    </div>
  );
};

export default AboutBuyBanner;
