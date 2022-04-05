import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
//for toggle easily
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initials="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Daily Products">
          <div className="answer">
            <p>Loream ipsum dolor sit amet.</p>
            <p>
              Loream ipsum dolor sit amet consectetur adipisicing Necessitatius,
              neque.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Loream ipsum dolor sit amet.</p>
            <p>
              Loream ipsum dolor sit amet consectetur adipisicing Necessitatius,
              neque.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Loream ipsum dolor sit amet.</p>
            <p>
              Loream ipsum dolor sit amet consectetur adipisicing Necessitatius,
              neque.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Loream ipsum dolor sit amet.</p>
            <p>
              Loream ipsum dolor sit amet consectetur adipisicing Necessitatius,
              neque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
