import { Arimo } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface FounderProps {
  image: string;
  fullname: string;
}

const Founder: FC<FounderProps> = ({ image, fullname }) => {
  return (
    <div className="col-lg-3">
      <div className="founder">
        <Image src={require(`../assets/images/${image}`)} alt="Founder" />
        <a className={arimo.className} href="#">
          {fullname}
        </a>
      </div>
    </div>
  );
};

export default Founder;
