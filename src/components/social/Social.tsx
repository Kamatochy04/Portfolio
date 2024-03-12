import { motion } from "framer-motion";
import React, { useEffect } from "react";

import AOS from "aos";

import "./social.scss";

interface ISocial {
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
}

const Social = ({ dataAos, dataAosDuration, dataAosDelay }: ISocial) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="social"
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
      // data-aos="fade-up"
      // data-aos-duration="1000"
      // data-aos-delay="500"
    >
      <a href="https://twitter.com/Andrei55311">
        <motion.div
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.9 }}
          className="social-item"
        >
          <i className="bx bxl-twitter"></i>
        </motion.div>
      </a>
      <a href="https://www.instagram.com/_a_ndrucha_/">
        <motion.div
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.9 }}
          className="social-item"
        >
          <i className="bx bxl-instagram-alt"></i>
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/in/andrey-valiuk-7ba4762a1/">
        <motion.div
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.9 }}
          className="social-item"
        >
          <i className="bx bxl-linkedin-square"></i>
        </motion.div>
      </a>
      <a href="https://t.me/AndreiiV_V">
        <motion.div
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.9 }}
          className="social-item"
        >
          <i className="bx bxl-telegram"></i>
        </motion.div>
      </a>
    </div>
  );
};

export default Social;
