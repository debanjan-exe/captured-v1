import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setmovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movie, url]);
  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h1> {movie.title} </h1>
            <img src={movie.mainImg} alt="movie" />
            {/* for map awards because it is in array */}
            <Awards>
              {movie.awards.map((award) => (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                ></Award>
              ))}
            </Awards>
            <ImageDisplay>
              <img src={movie.secondaryImg} alt="movie" />
            </ImageDisplay>
          </Headline>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h1 {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h1 {
    font-size: 2rem;
  }
  .line {
    background-color: #23d997;
    width: 100%;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    padding-bottom: 5rem;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3> {title} </h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
