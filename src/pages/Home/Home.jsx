import React from "react";
import * as Styled from "./styles";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CardMovies from "../../components/CardMovies/CardMovies";

const Home = () => {
  const [data, setData] = useState([]);

  async function apiMovies(url) {
    try {
      const api = await fetch(url);
      const res = await api.json();
      setData(res.results);
    } catch (error) {}
  }

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=98930526aa71a154e93993723315aadd";

  useEffect(() => {
    apiMovies(url);
  }, []);

  return (
    <Styled.Container>
      <div>
        {data.map((movies) => (
          <CardMovies movie={movies} />
        ))}
      </div>
      <Outlet />
    </Styled.Container>
  );
};

export default Home;
