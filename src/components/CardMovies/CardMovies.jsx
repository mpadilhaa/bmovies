import React from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import imgNoImage from "../../assets/imageError.png";

const CardMovies = ({ movie, showLink = true, overview = false }) => (
  <Styled.Container>
    <Styled.Image>
      {!movie.backdrop_path && <img src={imgNoImage} alt="" />}
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
    </Styled.Image>

    <Styled.Content>
      <h4>{movie.release_date}</h4>
      {overview && <p>{movie.overview}</p>}
      {showLink && (
        <Link to={`/movie/${movie.id}`} style={Styled.stylesLink}>
          Details
        </Link>
      )}
    </Styled.Content>
  </Styled.Container>
);

export default CardMovies;
