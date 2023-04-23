import Image from "next/image";
import { ChangeEvent, FC, useState } from "react";
import ExpandNavigation from "../ExpandNavigation";
import { AiFillStar } from "react-icons/ai";
import Button from "../ui/Button";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ProductType } from "@/types/product.type";
import { Arimo, Lato, Source_Sans_Pro } from "next/font/google";
import { BasketItemType } from "@/types/basketItem.type";
import { AddToBasket } from "@/store/Basket/BasketSlice";
import { useDispatch } from "react-redux";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });
const sourceSanPro = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });

interface ProductDetailSectionProps {
  data: ProductType;
}

const ProductDetailSection: FC<ProductDetailSectionProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<string>("L");

  const sizeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedSize(value);
  };

  const addToBasketHandler = (data: ProductType) => {
    const basket: BasketItemType = {
      id: data.id,
      name: data.name,
      image: data.image,
      discountPrice: data.discountPrice,
      quantity: 1
    }

    AddToBasket(dispatch, basket);
  }

  return (
    <section className="product-detail-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="product-detail__image">
              <div style={{ margin: "auto", maxWidth: "100%" }}>
                <Image
                  src={`/images/${data.image}`}
                  width={550}
                  height={685}
                  quality={100}
                  alt="product image"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
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
                    <AiFillStar style={{ color: "#D6763C", opacity: "50%" }} />
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
                <select onChange={sizeHandler}>
                  <option>Select Size</option>
                  <option value="S">Small S</option>
                  <option value="M">Medium M</option>
                  <option value="L">Large L</option>
                  <option value="XL">Extra Large XL</option>
                </select>
              </div>

              <div className="product-add-cart">
                <Button
                  onClick={() => addToBasketHandler(data)}
                  type="button"
                >
                  Add To Cart
                </Button>
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
                        ? data.tags.map((tag) => <span key={tag}>{tag} </span>)
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
  );
};

export default ProductDetailSection;
