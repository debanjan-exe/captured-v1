import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 5rem, 10rem;
  padding-left: 10rem;
  padding-right: 10rem;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    align-items: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  /* padding-left: 10rem; */
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 5rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    padding-right: 5rem;
  }
`;
export const Hide = styled.div`
  overflow: hiddden;
`;
