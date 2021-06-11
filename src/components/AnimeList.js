import React from "react";
import { useGlobalContext } from "../context";
import Anime from "./Anime";
import Loading from "./Loading";

export default function AnimeList() {
  const { animeList } = useGlobalContext();
  console.log(animeList);
  if (!animeList) {
    return <Loading />;
  }
  return (
    <div>
      {animeList &&
        animeList.map((item) => {
          return <Anime key={item.mal_id} />;
        })}
    </div>
  );
}
