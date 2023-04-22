import { Arimo } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { burgerMenuAction } from "@/store/BurgerMenu/BurgerMenuSlice";
import { RootState } from "@/store";
import Image from "next/image";

const arimo = Arimo({ weight: "500", subsets: ["latin"] });

interface BurgerMenuProps {}

const BurgerMenu: FC<BurgerMenuProps> = ({}) => {
  const dispatch = useDispatch();

  const isBurgerActive = useSelector<RootState, boolean>(
    (state: any) => state.BurgerMenuSlice.isActive
  );

  const closeMenuHandler = () => {
    dispatch(burgerMenuAction.toogleBurgerMenu());
  };

  return (
    <>
      <div className={isBurgerActive ? "burger-menu active" : "burger-menu"}>
        <div className="burger-menu__logo d-flex justify-content-between align-items-center">
          <Link href="/">NorthStar</Link>
          <Button onClick={closeMenuHandler}>
            <Image
              priority
              src="/images/x-thin.svg"
              height={24}
              width={25}
              alt="Burger menu Icon"
            />
          </Button>
        </div>
        <ul>
          <li>
            <Link className={arimo.className} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={arimo.className} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={arimo.className} href="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className={arimo.className} href="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={closeMenuHandler}
        className={
          isBurgerActive ? "burger-menu-close active" : "burger-menu-close"
        }
      ></div>
    </>
  );
};

export default BurgerMenu;
