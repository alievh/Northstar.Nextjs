import { FC } from "react";

interface BuyBannerProps {
  containerClass: string;
  header: string;
  text: string;
}

const BuyBanner: FC<BuyBannerProps> = ({ containerClass, header, text }) => {
  return (
    <div className={`buybanner-container ${containerClass}`}>
      <h3>{header}</h3>
      <p>{text}</p>
      <a href="#">Buy Now</a>
    </div>
  );
};

export default BuyBanner;
