import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=22e0eae7104b654669ac554f949a4cd0`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(movieDetail);
  return (
    <div className="min-h-screen relative p-7">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.poster_path || movieDetail?.backdrop_path
        } `}
      ></Image>
      <div className="top-10  absolute  p-5 flex flex-col gap-4   ">
        <div className="text-4xl">{movieDetail?.original_title}</div>
        <div className="text-xl w-1/2 ">{movieDetail?.overview}</div>
        <div className="">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className="border w-24 p-3 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
