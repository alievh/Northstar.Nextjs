import { Arimo } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import BurgerMenu from "./BurgerMenu";
import { Router } from "next/router";
import Button from "./ui/Button";
import Image from "next/image";
import { burgerMenuAction } from "@/store/BurgerMenu/BurgerMenuSlice";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const dispatch = useDispatch();

  const burgerMenuHandler = () => {
    dispatch(burgerMenuAction.toogleBurgerMenu());
  };

  Router.events.on("routeChangeStart", () => {
    dispatch(burgerMenuAction.setBurgerMenu(false));
  });

  return (
    <header id="header">
      <div className="container d-flex">
        <div className="header__logo">
          <Link href="/">NorthStar</Link>
        </div>
        <nav className="navigation">
          <ul className={`navigation__lists ${arimo.className}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <ul className="navigation__icons">
            <li className="navigation__icons-item">
              <Link href="/">
                <Image
                  priority
                  src="/images/user.svg"
                  height={24}
                  width={25}
                  alt="User Icon"
                />
              </Link>
            </li>
            <li className="navigation__icons-item">
              <Link href="/cart">
                <Image
                  priority
                  src="/images/shopping_bag.svg"
                  height={24}
                  width={25}
                  alt="Shopping bag Icon"
                />
              </Link>
            </li>
            <li className="navigation__icons-item">
              <Button onClick={burgerMenuHandler} type="button">
                <Image
                  priority
                  src="/images/burger_menu.svg"
                  height={24}
                  width={25}
                  alt="Burger menu Icon"
                />
              </Button>
              <BurgerMenu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
