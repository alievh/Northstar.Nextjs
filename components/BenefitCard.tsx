import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

interface BenefitCardProps {
  icon: string;
  header: string;
  text: string;
}

const baloo = Baloo_2({ weight: "700", subsets: ["latin"] });

const BenefitCard: FC<BenefitCardProps> = ({ icon, header, text }) => {
  return (
    <div className="col-lg-3 col-sm-6 benefit">
      <div className="benefit__icons">
        <Image
          priority
          src={`/images/${icon}`}
          height={24}
          width={28}
          alt="Follow us on Twitter"
        />
      </div>
      <div className="benefit__content">
        <h5 className={baloo.className}>{header}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
