import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Movie from "../components/Movie";

function Main() {
  const [show, setShow] = useState("index");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=harry&apikey=9b08193f")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search ? data.Search : []);
        setLoading(false);
      });
  }, []);

  const handleEnter = (search, type) => {
    if (search.trim() === "") return;
    setLoading(true);
    setShow("search");
    search = encodeURIComponent(search);
    let url = `https://www.omdbapi.com/?s=${search}&apikey=4a3b711b`;
    if (type !== "all") {
      url = url + `&type=${type}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search ? data.Search : []);
        setLoading(false);
      });
  };

  const handleReadMore = (id) => {
    setLoading(true);
    setShow("movie");
    fetch(`https://www.omdbapi.com/?apikey=9b08193f&i=${id}&plot=full`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.Title ? data : {});
        setLoading(false);
      });
  };

  return (
    <main className="container">
      <Search enterHandler={handleEnter} />
      {loading ? (
        <div className="loader">Загрузка...</div>
      ) : show === "movie" ? (
        <Movie {...movie} />
      ) : (
        <Movies movies={movies} readMoreHandler={handleReadMore} />
      )}
    </main>
  );
};

export default Main;
