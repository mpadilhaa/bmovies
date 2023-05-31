import React from "react";
import * as Styled from "./styles";
import Button from "../Button/Button";

const CardMovies = ({ movie }) => (
  <Styled.Container>
    <Styled.Image>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
    </Styled.Image>
    <Button url={`/movie/${movie.id}`}>Details</Button>
  </Styled.Container>
);

export default CardMovies;
