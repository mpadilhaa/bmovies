import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CardMovies from "../../components/CardMovies/CardMovies";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  async function apiMovies(url) {
    try {
      const api = await fetch(url);
      const res = await api.json();
      console.log(res);
      setData(res);
    } catch (error) {}
  }

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=98930526aa71a154e93993723315aadd`;

  useEffect(() => {
    apiMovies(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {data && <CardMovies movie={data} showLink={false} overview={true} />}
    </div>
  );
};

export default Movie;
