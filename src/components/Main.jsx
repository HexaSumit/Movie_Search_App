import React, { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/Moviecontext";
import Loader from "./Loader";

function Main() {
  const { toggle } = useContext(MovieContext);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    // Show loader for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading?(
      <Loader />
    ):(
      <div className={`min-h-screen w-full flex flex-col items-center justify-center px-4 ${toggle ? "bg-black text-white" : "bg-white text-black"}`}>

      <div className="text-center flex flex-col items-center justify-center gap-6 w-full px-4">
        <span className=" typewriter-container">
          <h2 style={{ color: "#564d4d" }} className="text-4xl sm:text-5xl font-semibold typewriter">
            MoviesFlix
          </h2>
        </span>
        <h4 style={{ color: "#564d4d" }} className="text-lg sm:text-2xl font-semibold">
          WATCH LATEST MOVIES AND TV SHOWS...
        </h4>

        {/* Buttons (Now Centered) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-30 mt-10 w-full">
          <Link to="/movies" className="w-full sm:w-auto">
            <button className={`bg-[#831010] font-semibold py-4 w-48 sm:w-56 rounded-md shadow-md ${toggle ? "text-black" : "text-white"}`}>
              Movies
            </button>
          </Link>
          <Link to="/series" className="w-full sm:w-auto">
            <button className={`bg-[#831010] font-semibold py-4 w-48 sm:w-56 rounded-md shadow-md ${toggle ? "text-black" : "text-white"}`}>
              TV Series
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm sm:text-base">
        <span className={toggle ? "text-white" : "text-black"}>
          Made with <span className="text-blue-500">&hearts;</span> by Sumit Bhardwaj
        </span>
      </div>
    </div>
    )}
    </>
  );
}

export default Main;
