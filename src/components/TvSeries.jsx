import React, { useContext } from 'react';
import { MovieContext } from '../context/Moviecontext';
import Card from './Card';

function Tvshows() {
  const { searchQuery, setSearchQuery, seriesResults, noSeriesFound, toggle,sortOrder,setSortOrder } = useContext(MovieContext);

  return (
    <div className={`pt-[80px] w-full min-h-screen px-4 sm:px-10 ${toggle ? "bg-black" : "bg-white"}`}>
      {/* Breadcrumb Bar */}
      <div style={{ backgroundColor: '#564d4d' }} className='w-full h-[65px] flex items-center px-6 rounded-lg'>
        <h3 style={{ color: 'black' }} className='text-lg'>
          Home <span style={{ color: '#868e96' }}> / </span> <span className='text-white'>TV Series</span>
        </h3>
      </div>

      {/* SEARCH BOX */}
      <div className="mb-6 flex flex-col items-center mt-8">
        <div className="bg-white p-4 rounded-4xl w-full max-w-[640px] flex items-center shadow-md">
          <input
            type="text"
            placeholder="Search TV Series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-black font-semibold text-lg pl-3"
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


        {/* Heading */}
        <h2 style={{ color: '#831010' }} className='font-bold text-2xl sm:text-3xl mt-6 text-center'>
          TRENDING WEB SERIES ON MOVIEFLIX
        </h2>
      </div>

      {/* Series Grid */}
      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center pb-10'>
        {noSeriesFound ? (
          <div className='mt-10'>
            <p className='text-2xl text-white font-bold'>No series found</p>
          </div>
        ) : (
          seriesResults.map((series) => <Card key={series.imdbID} data={series} />)
        )}
      </div>
    </div>
  );
}

export default Tvshows;
