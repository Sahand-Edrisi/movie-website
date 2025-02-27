import React, { useState, useEffect } from "react";
import Header from "./pages/Header";
import "./app.css";
import Banner from "./pages/Banner";
import Schedule from "./pages/Schedule";
import "bootstrap/dist/css/bootstrap.css";
import ComingSoon from "./pages/ComingSoon";
import Blog from "./pages/Blog";
import Footer from "./pages/Footer";
import "./responsive/responsive.css";

function App() {
  const [scroll, setScroll] = useState(0);
  const [blog, setBlog] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("https://sahand-edrisi.github.io/movie-website/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.massage));
  };

  const BlogData = () => {
    fetch("https://sahand-edrisi.github.io/movie-website/data/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((e) => console.log(e.massage));
  };

  useEffect(() => {
    fetchData();
    BlogData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  
  return movies.length> 0 ?
    <>
      <Header scroll={scroll} />
      <Banner data={movies} />
      <Schedule data={movies} />
      <ComingSoon data={movies} />
      <Blog data={blog} />
      <Footer />
    </> : undefined

}

export default App;
