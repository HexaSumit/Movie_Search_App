import React, { useContext } from 'react'
import { MovieContext } from '../context/Moviecontext';

function Loader() {
    const { toggle } = useContext(MovieContext);
    return (
        <div className={`${toggle ? "bg-black text-white" : "bg-white text-black"} flex flex-col items-center justify-center h-screen text-white space-y-4`}>
        <div className="spinner"></div>
        <div className="text-4xl font-semibold mt-3">
          Loading <span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span>
        </div>
      </div>
    )
}

export default Loader