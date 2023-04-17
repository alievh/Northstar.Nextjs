import { Arimo } from "next/font/google";
import Link from "next/link";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface ExpandNavigationProps {
  pageName: string;
}

const ExpandNavigation: FC<ExpandNavigationProps> = ({ pageName }) => {
  return (
    <ul className={`expand-navigation ${arimo.className}`}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <span>{pageName}</span>
      </li>
    </ul>
  );
};

export default ExpandNavigation;
