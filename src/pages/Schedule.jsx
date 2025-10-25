import { useState } from "react";
import "./schedule.css";
import BtnCategory from "../components/BtnCategory";
import ScheduleMovies from "../components/ScheduleMovies";
import btnCategoryData from "../data/btnCategoryData";
function Schedule({ data }) {
  const [movies] = useState(data);
  const [CategoryData, setCategoryData] = useState(btnCategoryData);
  const [movieShowData, setMovieShowData] = useState(movies);

  function ShowCategory(nameCategory) {
    const categoryItems = CategoryData.map((category) => {
      category.active = false;
      if (nameCategory === category.title) {
        category.active = true;
      }
      return category;
    });
    setCategoryData(categoryItems);
    movieShow(nameCategory);
  }
  function movieShow(nameCategory) {
    if (nameCategory === "All") {
      return setMovieShowData(movies);
    }
    const newMovies = [];
    movies.map((movie) => {
      if (movie.category === nameCategory) {
        newMovies.push(movie);
      }
      return movie;
    });
    setMovieShowData(newMovies);
  }
  return (
    <div className="schedule" id="schedule">
      <div className="title">
        <div className="text">opening this week</div>
        <div className="line"></div>
      </div>
      <div className="category">
        <BtnCategory data={CategoryData} ShowCategory={ShowCategory} />
      </div>
      <div className="movies">
        {movies && movies.length > 0 ? (
          <ScheduleMovies movies={movieShowData} />
        ) : undefined}
      </div>
    </div>
  );
}

export default Schedule;
