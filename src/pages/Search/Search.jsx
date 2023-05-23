/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardMovies from "../../components/CardMovies/CardMovies";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [moviesSearch, setMoviesSearch] = useState([]);

  const query = searchParams.get("q");

  async function searchMovies(url) {
    try {
      const api = await fetch(url);
      const res = await api.json();
      console.log(res.results);
      setMoviesSearch(res.results);
    } catch (error) {}
  }

  const url = `https://api.themoviedb.org/3/search/movie?api_key=98930526aa71a154e93993723315aadd&query=${query}
  `;

  useEffect(() => {
    searchMovies(url);
  }, [query]);

  return (
    <div>
      {moviesSearch && moviesSearch.map((item) => <CardMovies movie={item} />)}
    </div>
  );
};

export default Search;
