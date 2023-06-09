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
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="founder">
        <div style={{ margin: "auto", maxWidth: "100%" }}>
          <Image
            src={`/images/${image}`}
            width={295}
            height={280}
            alt="Founder"
            style={{ width: "100%", objectFit: "cover" }}
            quality={100}
          />
        </div>
        <a className={arimo.className} href="#">
          {fullname}
        </a>
      </div>
    </div>
  );
};

export default Founder;
