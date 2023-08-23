/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";

interface MovieListProps {
  title: string;
  fetchURL: string;
  rowID: string;
}
interface Movie {
  backdrop_path: string;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    if (slider) {
      slider.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    if (slider) {
      slider.scrollLeft += 500;
    }
  };

  return (
    <>
      <h2 className="text-pink-300 font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          className="bg-pink-600 left-3 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          style={{ overflowX: "hidden" }}
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          className="bg-pink-600 right-3 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default MovieList;
