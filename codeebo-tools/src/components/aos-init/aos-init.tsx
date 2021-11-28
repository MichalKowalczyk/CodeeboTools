import { useLocation } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function AosInit() {
  const location = useLocation();

  const initAos = () => {
    setTimeout(() => {
      AOS.init({
        duration: 2000,
        disable: function () {
          var maxWidth = 900;
          return window.innerWidth < maxWidth;
        },
      });
    }, 200);
  };

  useEffect(() => {
    initAos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initAos();
  }, [location]);

  return <></>;
}

export default AosInit;
