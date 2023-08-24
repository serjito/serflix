/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { auth } from "@/firebase";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
interface MovieProps {
  item: {
    id: string;
    backdrop_path: string;
    title: string;
    overview: string;
  };
}

const Movie: React.FC<MovieProps> = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const user = auth.currentUser;

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
          description: item.overview,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  return (
    <div className="w-[160px] sm:w-[240px] lg:w-[280px] inline-block gap-3 cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-400" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-400" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
