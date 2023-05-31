/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardMovies from "../../components/CardMovies/CardMovies";
import * as Styled from "./styles";
import { API_KEY } from "../../utils/utils";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [moviesSearch, setMoviesSearch] = useState([]);

  const query = searchParams.get("q");

  async function searchMovies(url) {
    try {
      const api = await fetch(url);
      const res = await api.json();
      setMoviesSearch(res.results);
    } catch (error) {}
  }

  const url = `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${query}
  `;

  useEffect(() => {
    searchMovies(url);
  }, [query]);

  return (
    <Styled.SearchContainer>
      {moviesSearch &&
        moviesSearch.map((item) => (
          <Styled.SearchMovies key={item.id}>
            <CardMovies movie={item} />
          </Styled.SearchMovies>
        ))}
    </Styled.SearchContainer>
  );
};

export default Search;
