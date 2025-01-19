import React, { useState, useEffect } from "react";
import "./banner.css";
import MovieInformation from "../components/MovieInformation";
import Date from "../components/Date";
function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/movie-website/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.massage));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="banner">
        {movies && movies.length > 0
          ? movies.map((movie) =>
              movie.active ? (
                <div className="movie" key={movie._id}>
                  <img
                    src={movie.bgImg}
                    alt=""
                    className={`bgImg ${movie.active ? "active" : undefined}`}
                  />
                  <div className="row-one">
                    <div className="movie-content">
                      <MovieInformation data={movie}/>
                    </div>
                    <div className="movieDate">
                    <Date date = {movie.date}/>
                    </div>
                  </div>
                </div>
              ) : undefined
            )
          : undefined}
        <div className="row-two">
          <div className="swiper"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
