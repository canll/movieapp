"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Movie = ({ dt }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id} `)}
      className=" min-w-[470px] relative imgContainer "
    >
      <Image
        width={400}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.poster_path || dt?.backdrop_path
        } `}
      ></Image>
      <div className="bottom-0 p-2 absolute w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 duration-700 text-2xl color-gray-800 ">
        <div className="">{dt?.original_title}</div>
        <div className="">
          {dt?.release_date} - {dt?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movie;
