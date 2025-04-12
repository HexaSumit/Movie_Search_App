import React, { useContext } from 'react';
import { MovieContext } from '../context/Moviecontext';

function MovieDetails() {
    const { toggle, selectedMovie, favourite, setfavourite } = useContext(MovieContext);

    const openTrailer = (title) => {
        const youtubeSearchURL = `https://www.youtube.com/results?search_query=${title}+trailer`;
        window.open(youtubeSearchURL, "_blank");
    };

    return (
        <div className={`min-h-screen text-white flex justify-center items-center pt-[80px] px-4 ${toggle ? "bg-gray-900" : "bg-white"}`}>
            <div className="max-w-5xl w-full shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row bg-gray-800">

                {/* Left Side - Movie Poster */}
                <div className="w-full md:w-1/2">
                    <img
                        src={selectedMovie.Poster}
                        alt={selectedMovie.Title}
                        className="w-full h-full object-cover"
                    />
                </div>


                {/* Right Side - Movie Details */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4">{selectedMovie.Title}</h1>
                    <p className="text-lg sm:text-xl text-gray-300"><strong>Year:</strong> {selectedMovie.Year}</p>
                    <p className="text-lg sm:text-xl text-gray-300"><strong>Type:</strong> {selectedMovie.Type}</p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => openTrailer(selectedMovie.Title)}
                            className="bg-blue-500 text-white px-5 py-3 rounded shadow-lg hover:bg-blue-600 transition text-sm sm:text-base">
                            🎬 Watch Trailer
                        </button>
                        <button
                            onClick={() => window.history.back()}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded transition text-sm sm:text-base">
                            🔙 Go Back
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MovieDetails;
