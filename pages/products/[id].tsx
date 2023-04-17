import { FC, useState } from "react";
import { useRouter } from "next/router";
import ExpandNavigation from "@/components/ExpandNavigation";
import productImage from "../../assets/images/product_detail_man.jpg";
import { Arimo, Lato, Source_Sans_Pro } from "next/font/google";
import { AiFillStar } from "react-icons/ai";
import { BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const sourceSanPro = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });
interface singleProductProps {}

const SingleProduct: FC<singleProductProps> = ({}) => {
  const [isDescriptionActive, setIsDescriptionActive] = useState(true);
  const [isReviewsActive, setIsReviewsActive] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const activateDescription = () => {
    setIsDescriptionActive(true);
    setIsReviewsActive(false);
  };

  const activateReviews = () => {
    setIsDescriptionActive(false);
    setIsReviewsActive(true);
  };

  return (
    <main>
      <section className="product-detail-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="product-detail__image"
                style={{
                  backgroundImage: `url(${productImage.src})`,
                }}
              >
                <span>-24%</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="product-detail__info">
                <div className="expand-navigation-container">
                  <ul>
                    <ExpandNavigation pageName="Shop" />
                  </ul>
                </div>
                <div className="product-title">
                  <h4 className={arimo.className}>Plain T Shirt</h4>
                </div>
                <div className="product-rate">
                  <ul>
                    <li>
                      <AiFillStar style={{ color: "#D6763C" }} />
                    </li>
                    <li>
                      <AiFillStar style={{ color: "#D6763C" }} />
                    </li>
                    <li>
                      <AiFillStar style={{ color: "#D6763C" }} />
                    </li>
                    <li>
                      <AiFillStar style={{ color: "#D6763C" }} />
                    </li>
                    <li>
                      <AiFillStar
                        style={{ color: "#D6763C", opacity: "50%" }}
                      />
                    </li>
                    <li>
                      <span className={sourceSanPro.className}>(15)</span>
                    </li>
                  </ul>
                </div>
                <div className="product-price">
                  <ul>
                    <li>
                      <span className={lato.className}>$69.00</span>
                    </li>
                    <li>
                      <span className={lato.className}>$49.00</span>
                    </li>
                  </ul>
                </div>
                <div className="product-description">
                  <p>
                    A classic t-shirt never goes out of style. This is our most
                    premium collection of shirt. This plain white shirt is made
                    up of pure cotton and has a premium finish.
                  </p>
                </div>

                <div className="product-size">
                  <select>
                    <option>Select Size 1</option>
                    <option>Small S</option>
                    <option>Medium M</option>
                    <option>Large L</option>
                    <option>Extra Large XL</option>
                  </select>
                </div>

                <div className="product-add-cart">
                  <button type="button">Add To Cart</button>
                </div>

                <div className="product-category">
                  <ul>
                    <li>
                      <span className={lato.className}>
                        Category: Men, Polo, Casual
                      </span>
                    </li>
                    <li>
                      <span className={lato.className}>
                        Tags: Modern, Design, cotton
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="product-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <BsWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTelegramPlane />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <BsInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <BsTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <HiOutlineMail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="product-description-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                <li>
                  <button
                    type="button"
                    className={
                      isDescriptionActive
                        ? "description-button active"
                        : "description-button"
                    }
                    onClick={activateDescription}
                  >
                    Description
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={
                      isReviewsActive
                        ? "reviews-button active"
                        : "description-button"
                    }
                    onClick={activateReviews}
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="product-description__content">
                {isDescriptionActive ? (
                  <p className={lato.className}>
                    A key objective is engaging digital marketing customers and
                    allowing them to interact with the brand through servicing
                    and delivery of digital media. Information is easy to access
                    at a fast rate through the use of digital communications.
                    <br />
                    <br />
                    Users with access to the Internet can use many digital
                    mediums, such as Facebook, YouTube, Forums, and Email etc.
                    Through Digital communications it creates a
                    Multi-communication channel where information can be quickly
                    exchanged around the world by anyone without any regard to
                    whom they are.[28] Social segregation plays no part through
                    social mediums due to lack of face to face communication and
                    information being wide spread instead to a selective
                    audience.
                  </p>
                ) : (
                  <p className={lato.className}>Salam</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
