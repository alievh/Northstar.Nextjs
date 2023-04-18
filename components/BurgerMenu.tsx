import { Arimo } from "next/font/google";
import Link from "next/link";
import { FC } from "react";

const arimo = Arimo({weight: "500",subsets: ["latin"]});

interface BurgerMenuProps {
  className: string;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ className }) => {
  return (
    <div className={className}>
       <div className="burger-menu__logo">
        <Link href="/">NorthStar</Link>
       </div>
      <ul>
      <li>
          <Link  className={arimo.className} href="/">Home</Link>
        </li>
        <li>
          <Link  className={arimo.className} href="/about">About</Link>
        </li>
        <li>
          <Link  className={arimo.className} href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link  className={arimo.className} href="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
