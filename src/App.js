import { useState } from "react";
import "./styles.css";

const movieDb = {
  Comedy: [
    {
      name: "3 Idiots",
      year: 2009,
      Rating: 8.4
    },
    {
      name: "Hera pheri",
      year: 2000,
      Rating: 8.1
    },
    {
      name: "Gol Maal",
      year: 2005,
      Rating: 8
    }
  ],
  Action: [
    {
      name: "Black Panther: Wakanda Forever",
      year: 2022,
      Rating: 9
    },
    {
      name: "Top Gun: Maverick",
      year: 2022,
      Rating: 8.8
    },
    {
      name: "Kantara",
      year: 2022,
      Rating: 8.7
    }
  ],
  Romance: [
    {
      name: "The notebook",
      year: 2004,
      Rating: 9.4
    },
    {
      name: "Love Jones",
      year: 1997,
      Rating: 8.1
    },
    {
      name: "Jaane Tu… Ya Jaane Na",
      year: 2010,
      Rating: 8
    }
  ]
};

export default function App() {
  const [movieListFromCategory, setMovieListFromCategory] = useState(
    movieDb.Comedy
  );
  const [selectedCategory, setCategory] = useState("Comedy");

  const movieList = Object.keys(movieDb);

  function getMovieList(category) {
    setCategory(category);
    setMovieListFromCategory(movieDb[category]);
  }

  return (
    <div className="App">
      <div className="App--container">
        <h1 className="title">
          MobieHub
          <span role="img" aria-label="popcorn">
            🍿
          </span>
        </h1>
        <h2 className="subtitle">
          Want to watch the best movies? You have come to the right place!
        </h2>
        <div className="category__container">
          {movieList.map((category) => {
            return (
              <button
                className={`category ${
                  category === selectedCategory ? "selected" : ""
                }`}
                key={category}
                onClick={() => getMovieList(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="movie__list">
          <h3>Genre selected: {selectedCategory}</h3>
          {movieListFromCategory.map((item) => {
            return (
              <div className="movie">
                <p className="movie__title" key={item.name}>
                  {item.name}
                  <span className="movie__year">({item.year})</span>
                </p>
                <p className="movie__rating">{item.Rating}/10</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
