import { FC, useState } from "react";
import ExpandNavigation from "@/components/ExpandNavigation";
import { Arimo, Lato, Source_Sans_Pro } from "next/font/google";
import { AiFillStar } from "react-icons/ai";
import { BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GetServerSideProps } from "next";
import axios from "axios";
import Image from "next/image";
import Button from "@/components/ui/Button";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const sourceSanPro = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  shorDescription: string;
  longDescription: string;
  categories: string[];
  tags: string[];
  rate: number;
  image: string;
};

interface singleProductProps {
  data: Product;
}

// SSR Fetching
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.query;
  const res = await axios(`http://localhost:3100/products/${id}`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
};

const SingleProduct: FC<singleProductProps> = ({ data }) => {
  const [isDescriptionActive, setIsDescriptionActive] = useState(true);
  const [isReviewsActive, setIsReviewsActive] = useState(false);

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
              <div className="product-detail__image">
                <Image
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={require(`../../assets/images/${data.image}`)}
                  quality={100}
                  alt="product image"
                />
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
                  <h4 className={arimo.className}>{data.name}</h4>
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
                      <span className={lato.className}>
                        ${data.price.toFixed(2)}
                      </span>
                    </li>
                    <li>
                      <span className={lato.className}>
                        ${data.discountPrice.toFixed(2)}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="product-description">
                  <p>{data ? data.shorDescription : null}</p>
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
                  <Button type="button">Add To Cart</Button>
                </div>

                <div className="product-category">
                  <ul>
                    <li>
                      <span className={lato.className}>
                        Category:{" "}
                        {data
                          ? data.categories.map((category) => (
                              <span key={category}>{category} </span>
                            ))
                          : null}
                      </span>
                    </li>
                    <li>
                      <span className={lato.className}>
                        Tags:{" "}
                        {data
                          ? data.tags.map((tag) => (
                              <span key={tag}>{tag} </span>
                            ))
                          : null}
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
                  <Button
                    type="button"
                    className={
                      isDescriptionActive
                        ? "description-button active"
                        : "description-button"
                    }
                    onClick={activateDescription}
                  >
                    Description
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    className={
                      isReviewsActive
                        ? "reviews-button active"
                        : "description-button"
                    }
                    onClick={activateReviews}
                  >
                    Reviews (0)
                  </Button>
                </li>
              </ul>
              <div className="product-description__content">
                {isDescriptionActive ? (
                  <p className={lato.className}>{data.longDescription}</p>
                ) : (
                  <p className={lato.className}> {data.shorDescription}</p>
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
