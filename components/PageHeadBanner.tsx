import { FC } from "react";

interface PageHeadBannerProps {
    src: string,
    heading: string
}

const PageHeadBanner: FC<PageHeadBannerProps> = ({src, heading}) => {
  return (
    <div
      className="page-banner"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="container">
        <h3>{heading}</h3>
      </div>
    </div>
  );
};

export default PageHeadBanner;
