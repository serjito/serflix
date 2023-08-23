"use client";
import React, { useEffect, useState } from "react";
import request from "@/request";
import axios from "axios";

interface Movie {
  backdrop_path: string;
  title: string;
  overview: string;
}

const Billboard = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }, 9000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];

  if (!currentMovie) {
    return null;
  }

  return (
    <div className="relative h-[30.25vw]">
      <img
        className="w-full h-[90] object-cover brightness-[30%]"
        src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
        alt={currentMovie.title || "Movie Backdrop"}
      ></img>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-pink-600 text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {currentMovie.title}
        </p>
        <p
          className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl overflow-hidden"
          style={{
            maxHeight: "8em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {currentMovie.overview}
        </p>
      </div>
    </div>
  );
};

export default Billboard;
