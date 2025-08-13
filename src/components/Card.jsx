import React, { useContext } from 'react';
import { MovieContext } from '../context/Moviecontext';
import { Link } from "react-router-dom";

function Card({ data }) {
  const { toggle, setSelectedMovie } = useContext(MovieContext);
  
  const handleClick = (data) => {
    setSelectedMovie(data);
  };

  return (
    <Link to={`/movies/details/${data.imdbID}`}>
      <div 
        className="rounded-lg flex flex-col items-center cursor-pointer"
        onClick={() => handleClick(data)}
      >
        <img
  src={data.Poster}
  alt={data.Title}
  className="w-[90%] max-w-[270px] h-auto sm:h-[360px] object-cover rounded-md"
  onError={(e) => {
    e.target.src = "/fallback.jpg";
  }}
/>
        <h2 className={`text-lg font-semibold mt-2 text-center ${toggle ? "text-white" : "text-black"}`}>
          {data.Title}
        </h2>
        <p className={`text-sm text-center ${toggle ? "text-gray-400" : "text-black"}`}>
          {data.Year}
        </p>
      </div>
    </Link>
  );
}

export default Card;

