import { FC } from "react";
import { Arimo } from "next/font/google";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import Button from "./ui/Button";
import Input from "./ui/Input";

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
              <Input placeholder="Enter email" />
              <Button type="submit">
                <AiOutlineRight />
              </Button>
            </form>
          </div>
        </div>
        <div className="footer-privacy">
          <div className="footer-privacy__policy">
            <p>© 2020 NorthStar eCommerce</p>
            <p>Privacy Policy Terms & Conditions</p>
          </div>
          <div className="footer-privacy__payment-methods">
            <Image
              src={"/images/footer1.jpeg"}
              width={63}
              height={39}
              sizes="100px"
              alt="payment method"
            />
            <Image
              src={"/images/footer2.jpeg"}
              width={63}
              height={39}
              sizes="100px"
              alt="payment method"
            />
            <Image
              src={"/images/footer3.jpeg"}
              width={63}
              height={39}
              sizes="100px"
              alt="payment method"
            />
            <Image
              src={"/images/footer4.jpeg"}
              width={63}
              height={39}
              sizes="100px"
              alt="payment method"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
