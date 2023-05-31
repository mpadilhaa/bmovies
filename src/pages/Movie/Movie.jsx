import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/Button";

import * as Styled from "./styles";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  async function apiMovies(url) {
    try {
      const api = await fetch(url);
      const res = await api.json();

      setData(res);
    } catch (error) {
      console.log(error);
    }
  }

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=98930526aa71a154e93993723315aadd`;

  useEffect(() => {
    apiMovies(url);
  });

  return (
    <Styled.MovieContainer>
      <Styled.BackGroundLinear />
      {data && (
        <Styled.MovieContent>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt=""
          />
          <div>
            <h2>{data.original_title}</h2>
            <p>{data.overview}</p>
            <h5>{data.release_date}</h5>
            <span>
              {data.genres.map((genre) => (
                <small>{genre.name}</small>
              ))}
            </span>
            <span>
              <Button url={"/"}>Voltar ao inicio</Button>
            </span>
          </div>
        </Styled.MovieContent>
      )}
    </Styled.MovieContainer>
  );
};

export default Movie;
