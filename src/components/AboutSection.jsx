import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
// import { fade } from "../animation";
import { useScroll } from "./useScroll";
import ScrollTop from "../components/ScrollTop";
import styled from "styled-components";
//for Animation
const AboutSection = () => {
  const [element, controls] = useScroll();
  //   const motionanim = {
  //     hidden: { opacity: 0 },
  //     show: { opacity: 1, transition: { duration: 0.5 } },
  //   };

  //   const container = {
  //     hidden: { x: 100 },
  //     show: {
  //       x: 0,
  //       transition: {
  //         duration: 0.75,
  //         ease: "easeOut",
  //         staggerChildren: 0.5,
  //         when: "afterChildred",
  //       },
  //     },
  //   };

  return (
    <About variants={fade} animate={controls} initials="hidden" ref={element}>
      {/* <About> */}
      <Description>
        <div>
          {/* <motion.div
          // variants={container}
          // initial="hidden" // animate="show" // className="title" > */}
          <Hide>
            {/* <motion.h1 variants={motionanim}> */}
            <motion.h1 variants={titleAnim}>We work to make </motion.h1>
          </Hide>
          <Hide>
            {/* <motion.h1 variants={motionanim}> */}
            <motion.h1 variants={titleAnim}>
              your <span> dreams </span> come
            </motion.h1>
          </Hide>
          <Hide>
            {/* <motion.h1 variants={motionanim}>true</motion.h1> */}
            <motion.h1 variants={titleAnim}>true</motion.h1>
          </Hide>
          {/* </motion.div> */}
        </div>
        <motion.p variants={fade}>
          Contact us for any Photography or videography ideas that you have. We
          have best professionals with amazing skills to help you achieve.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={home1}
          alt="guy with camera"
        />
      </Image>
      <ScrollTop />
      <Wave />
    </About>
  );
};
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
