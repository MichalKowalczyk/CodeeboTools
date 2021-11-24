import React from "react";
import "./swiper-nav.scss";

interface Props {
  className: string;
  color?: "white" | "black";
}

const SwiperNav: React.FC<Props> = (props: Props) => {
  const { className, color = "white" } = props;
  return (
    <div className={`swiper-nav variant-${color} ${className}`}>
      <div className={`nav-prev ${className}-prev`} data-aos="slide-right" aria-label="Poprzedni slajd" role="button">
        &lsaquo;
      </div>
      <div className={`nav-next ${className}-next`} data-aos="slide-left" aria-label="Następny slajd" role="button">
        &rsaquo;
      </div>
    </div>
  );
};

export default SwiperNav;