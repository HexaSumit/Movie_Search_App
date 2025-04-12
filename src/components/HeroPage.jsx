import React, { useContext } from 'react';
import Card from './Card';
import { MovieContext } from '../context/Moviecontext';

function HeroPage() {
  const { searchQuery, setSearchQuery, movieResults, noMovieFound, toggle,sortOrder, setSortOrder } = useContext(MovieContext);

  return (
    <div className={`pt-25 w-full min-h-screen px-4 sm:px-10 ${toggle ? "bg-black" : "bg-white"}`}>

      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: '#564d4d' }} className='w-full h-[65px] flex items-center rounded-lg px-4 sm:px-10'>
        <h3 style={{ color: 'black' }} className='text-lg'>
          Home <span style={{ color: '#868e96' }}> / </span> <span className='text-white'>Movies</span>
        </h3>
      </div>

      {/* SEARCH BOX */}
      <div className="mb-6 flex flex-col items-center mt-6 w-full">
        <div className={`p-4 rounded-4xl w-full max-w-[640px] flex items-center border ${toggle ? "bg-gray-800 text-white border-gray-600" : "text-black border-gray-300"}`}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full bg-transparent outline-none font-semibold text-xl pl-3 ${toggle?"text-white":"text-black"}`}
          />
        </div>

        {/* DROP DOWN SORTING */}
        <div className="mt-4">
          <select
            className={`p-2 border rounded-md ${toggle ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}
            `}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="asc">Title (A-Z)</option>
            <option value="desc">Title (Z-A)</option>
          </select>
        </div>

        {/* TRENDING MOVIES HEADING */}
        <div className="mt-6 text-center">
          <h2 style={{ color: '#831010' }} className='font-bold text-2xl sm:text-3xl'>
            TRENDING MOVIES ON MOVIEFLIX
          </h2>
        </div>
      </div>

      {/* MOVIES GRID */}
      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center pb-10'>
        {noMovieFound ? (
          <div className='text-center col-span-full'>
            <p className='text-2xl text-white font-bold'>No Movie found</p>
          </div>
        ) : (
          movieResults.map((movie) => <Card key={movie.imdbID} data={movie} />)
        )}
      </div>

    </div>
  );
}

export default HeroPage;
