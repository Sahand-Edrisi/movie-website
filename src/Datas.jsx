import React, { useEffect, useState } from "react";
import App from "./App";
import { Route, Routes } from "react-router-dom";
function Datas() {

  useEffect(() => {
    const fetchData = fetch(
      "http://localhost:3000/movie-website/data/movieData.json"
    )
    fetchData.then(async(res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.massage));

    const BlogData =
      fetch("http://localhost:3000/movie-website/data/blogData.json")
      BlogData.then((res) => res.json())
        .then((data) => setBlog(data))
        .catch((e) => console.log(e.massage));
  }, []);

  const [scroll, setScroll] = useState(0);
  const [blog, setBlog] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);


  return (
    <Routes>
      
      <Route path="/movie-website/" element={<App scroll={scroll} blog={blog} movies={movies} />}/>
    </Routes>
  )
}

export default Datas;
