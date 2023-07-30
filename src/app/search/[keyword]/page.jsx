import React from "react";
import Movie from "<can>/component/Movie";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=22e0eae7104b654669ac554f949a4cd0&query=${keyword}`
  );
  const data = await res.json();
  console.log(data, "data");
  return (
    <div>
      {!data?.results ? (
        <div>Aranılan sonuçlar Bulunamadı </div>
      ) : (
        <div className="flex flex-wrap gap-3 justify-center">
          {data?.results?.map((dt, i) => (
            <Movie key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
