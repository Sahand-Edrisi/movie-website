import React, { useEffect, useState } from "react";
import "./schedule.css";
import BtnCategory from "../components/BtnCategory";
import ScheduleMovies from "../components/ScheduleMovies";
import btnCategoryData from "../data/btnCategoryData";
function Schedule({data}) {
  const [movies] = useState(data);
  const [moviesShow, setMoviesShow] = useState(data);


  const fetchDataShowMovies = () => {
    fetch("http://localhost:3000/movie-website/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMoviesShow(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchDataShowMovies();
  }, []);

  function ShowCategory(nameCategory) {
    const categoryItems = [];
    if (nameCategory === "All") {
      fetchDataShowMovies();
    }
    movies.map((category) => {
      if (nameCategory === category.category) {
        categoryItems.push(category);
      }
    });
    setMoviesShow(categoryItems);
  }
  return (
    <div className="schedule" id="schedule">
      <div className="title">
        <div className="text">opening this week</div>
        <div className="line"></div>
      </div>
      <div className="category">
        <BtnCategory data={btnCategoryData} ShowCategory={ShowCategory} />
      </div>
      <div className="movies">
        {moviesShow && moviesShow.length > 0 ? (
          <ScheduleMovies movies={moviesShow} />
        ) : undefined}
      </div>
    </div>
  );
}

export default Schedule;
