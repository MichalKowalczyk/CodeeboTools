import React from "react";
import "./swiper-nav.scss";

interface Props {
  className: string;
  classNamePrev: string;
  classNameNext: string;
}

const SwiperNav: React.FC<Props> = (props: Props) => {
  const { className, classNamePrev, classNameNext } = props;
  return (
    <div className={`swiper-nav ${className}`}>
      <div className={`nav-prev ${classNamePrev}`} data-aos="slide-right" aria-label="Poprzedni slajd" role="button">
        &lt;
      </div>
      <div className={`nav-next ${classNameNext}`} data-aos="slide-left" aria-label="Następny slajd" role="button">
        &gt;
      </div>
    </div>
  );
};

export default SwiperNav;