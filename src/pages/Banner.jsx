import { useState } from "react";
import "./banner.css";
import MovieInformation from "../components/MovieInformation";
import Date from "../components/Date";
import WatchTrailer from "../components/WatchTrailer";
import SwiperShow from "../components/SwiperShow";

function Banner({ data }) {
  const [movies, setMovies] = useState(data);
  function sendId(id) {
    const newMovie = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovie);
  }

  return (
    <>
      {movies && movies.length > 0
        ? movies.map((movie, index) =>
            movie.active ? (
              <div
                key={index}
                className={"banner active"}
                id="home"
                style={{
                  backgroundImage: `url(${movie.bgImg})`,
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                }}
              >
                <div className="movie" key={index}>
                      <MovieInformation data={movie} />
                    <div className="movie-Date-trailer">
                      <Date date={movie.date} />
                      <WatchTrailer trailer={movie.video} />
                    </div>
                </div>
                <SwiperShow sendId={sendId} movies={movies} />
              </div>
            ) : undefined
          )
        : undefined}
    </>
  );
}

export default Banner;
