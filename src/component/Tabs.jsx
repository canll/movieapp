"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  console.log(genre, "genre");

  const menu = [
    {
      name: "En Populer",
      url: "popular",
    },
    {
      name: "Vizyondakiler",
      url: "now_playing",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  2;
  return (
    <div
      className="p-5 my-3 text-center  text-2xl dark:bg-slate-900  bg-gray-100
    "
    >
      {menu.map((item, i) => (
        <Link
          className={`p-4 hover:text-amber-600 
          duration-700 
          cursor-pointer transition-opacity 
          ${
            item.url === genre
              ? " underline underline-offset-8 text-amber-600 "
              : ""
          } `}
          href={`/?genre=${item.url}`}
          key={i}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
