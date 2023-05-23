import React from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";

const CardMovies = ({ movie, showLink = true, overview = false }) => (
  <Styled.Container>
    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
    <h2>{movie.title}</h2>
    <h4>{movie.release_date}</h4>
    {overview && <p>{movie.overview}</p>}
    {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
  </Styled.Container>
);

export default CardMovies;
