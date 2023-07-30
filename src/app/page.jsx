import Movie from "<can>/component/Movie";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "discover/movie"
    }?api_key=22e0eae7104b654669ac554f949a4cd0&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  return (
    <div className="flex flex-wrap gap-9 items-center justify-center">
      {data?.results?.map((dt, i) => (
        <Movie key={i} dt={dt} />
      ))}
    </div>
  );
};
export default Page;
