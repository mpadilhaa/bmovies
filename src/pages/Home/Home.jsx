import React from "react";
import * as Styled from "./styles";
import { useEffect, useState } from "react";

import CardMovies from "../../components/CardMovies/CardMovies";
import SlideHome from "../../components/SlideHome/SlideHome";
import RatingCards from "../../components/RatingCards/RatingCards";
import { SwiperSlide } from "swiper/react";
import Button from "../../components/Button/Button";
import { API_KEY } from "../../utils/utils";

const Home = () => {
  const [data, setData] = useState([]);

  async function apiMovies() {
    const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated${API_KEY}`;

    const urlMostPopular = `https://api.themoviedb.org/3/movie/popular${API_KEY}`;

    const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing${API_KEY}`;

    try {
      const urls = [urlTopRated, urlMostPopular, urlNowPlaying];
      const promises = urls.map((url) =>
        fetch(url).then((response) => response.json())
      );
      const results = await Promise.all(promises);
      setData(results);
    } catch (error) {}
  }

  useEffect(() => {
    apiMovies();
  }, []);

  return (
    <Styled.Container>
      <Styled.Slider>
        <SlideHome>
          {data[2]?.results.map((img) => (
            <SwiperSlide style={{ maxHeight: "600px" }} key={img.id}>
              <div>
                <Styled.TextCarrousel>
                  <h1>{img.title}</h1>
                  <p>{img.overview}</p>
                  <Button url={`/movie/${img.id}`}>Details</Button>
                </Styled.TextCarrousel>

                <img
                  src={`https://image.tmdb.org/t/p/original${img.backdrop_path}`}
                  alt=""
                />
              </div>
              <Styled.BackGroundLinear />
            </SwiperSlide>
          ))}
        </SlideHome>
      </Styled.Slider>
      <Styled.Categorys>
        <RatingCards title={"Top Movies"} style={{ marginTop: "30px" }}>
          {data[0]?.results.map((movies) => (
            <SwiperSlide
              key={movies.id}
              style={{ minWidth: "140px", maxWidth: "300px" }}
            >
              <CardMovies movie={movies} />
            </SwiperSlide>
          ))}
        </RatingCards>

        <RatingCards title={"Most Popular"}>
          {data[1]?.results.map((movies) => (
            <SwiperSlide
              key={movies.id}
              style={{ minWidth: "140px", maxWidth: "300px" }}
            >
              <CardMovies key={movies.id} movie={movies} />
            </SwiperSlide>
          ))}
        </RatingCards>
      </Styled.Categorys>
    </Styled.Container>
  );
};

export default Home;
