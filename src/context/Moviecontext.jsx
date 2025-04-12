import React from 'react'
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext()


const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const TRENDING_MOVIES_URL = `https://www.omdbapi.com/?s=popular&type=movie&apikey=${API_KEY}`; // Trending movies
const TRENDING_SERIES_URL = `https://www.omdbapi.com/?s=popular&type=series&apikey=${API_KEY}`; // Trending series

function MovieProvider({ children }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [movieResults, setMovieResults] = useState([]);
    const [seriesResults, setSeriesResults] = useState([]);
    const [noMovieFound, setNoMovieFound] = useState(false);
    const [noSeriesFound, setNoSeriesFound] = useState(false);

    const [selectedMovie, setSelectedMovie] = useState(null)

    const [toggle, setToggle] = useState(true)

    const [sortOrder, setSortOrder] = useState("");

    const [favourite, setfavourite] = useState(false)
    const data = {
        searchQuery,
        setSearchQuery,
        movieResults,
        setMovieResults,
        seriesResults,
        setSeriesResults,
        noMovieFound,
        setNoMovieFound,
        noSeriesFound,
        setNoSeriesFound,
        toggle,
        setToggle,
        selectedMovie,
        setSelectedMovie,
        favourite,
        setfavourite,
        sortOrder,
        setSortOrder
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let url = searchQuery
                    ? `https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=${API_KEY}`
                    : TRENDING_MOVIES_URL;

                const res = await fetch(url);
                const data = await res.json();
                const filteredMovies = data.Search?.filter(movie => movie.Poster !== "N/A") || [];

                // 👉 Sorting based on title
                if (sortOrder === "asc") {
                    filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title)); // A–Z
                } else if (sortOrder === "desc") {
                    filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title)); // Z–A
                }

                setMovieResults(filteredMovies);
                setNoMovieFound(filteredMovies.length === 0);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovies();
    }, [searchQuery,sortOrder]);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                let url = searchQuery
                    ? `https://www.omdbapi.com/?s=${searchQuery}&type=series&apikey=${API_KEY}`
                    : TRENDING_SERIES_URL;

                const res = await fetch(url);
                const data = await res.json();
                const filteredSeries = data.Search?.filter(series => series.Poster !== "N/A") || [];

                // 👉 Sorting based on title
                if (sortOrder === "asc") {
                    filteredSeries.sort((a, b) => a.Title.localeCompare(b.Title)); // A–Z
                } else if (sortOrder === "desc") {
                    filteredSeries.sort((a, b) => b.Title.localeCompare(a.Title)); // Z–A
                }

                setSeriesResults(filteredSeries);
                setNoSeriesFound(filteredSeries.length === 0);
            } catch (error) {
                console.error("Error fetching series data:", error);
            }
        };

        fetchSeries();
    }, [searchQuery,sortOrder]);


    return (
        <div>
            <MovieContext.Provider value={data}>
                {children}
            </MovieContext.Provider>
        </div>
    )
}

export default MovieProvider