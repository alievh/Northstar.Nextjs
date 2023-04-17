import { FC } from "react";
import { Arimo } from "next/font/google";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4 className={arimo.className}>Company Info</h4>
            <ul className="footer__lists">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Latest Posts</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className={arimo.className}>Help Links</h4>
            <ul className="footer__lists">
              <li>
                <a href="#">Tracking</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className={arimo.className}>Useful Links</h4>
            <ul className="footer__lists">
              <li>
                <a href="#">Special Offers</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className={arimo.className}>Get In The Know</h4>
            <form>
              <input placeholder="Enter email" />
              <button type="submit">
                <AiOutlineRight />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-privacy">
          <div className="footer-privacy__policy">
            <p>© 2020 NorthStar eCommerce</p>
            <p>Privacy Policy Terms & Conditions</p>
          </div>
          <div className="footer-privacy__payment-methods">
            <Image src={require("../assets/images/footer1.jpeg")} sizes="100px" alt="payment method" />
            <Image src={require("../assets/images/footer2.jpeg")} sizes="100px" alt="payment method" />
            <Image src={require("../assets/images/footer3.jpeg")} sizes="100px" alt="payment method" />
            <Image src={require("../assets/images/footer4.jpeg")} sizes="100px" alt="payment method" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
