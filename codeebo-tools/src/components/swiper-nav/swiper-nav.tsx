import React from "react";
import "./swiper-nav.scss";

interface Props {
  className: string;
}

const SwiperNav: React.FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <div className={`swiper-nav ${className}`}>
      <div className={`nav-prev ${className}-prev`} data-aos="slide-right" aria-label="Poprzedni slajd" role="button">
        &lt;
      </div>
      <div className={`nav-next ${className}-next`} data-aos="slide-left" aria-label="Następny slajd" role="button">
        &gt;
      </div>
    </div>
  );
};

export default SwiperNav;
