import React from "react";
import { useGlobalContext } from "../context";
import Anime from "./Anime";
import Loading from "./Loading";
import { Container } from "react-bootstrap";
export default function AnimeList() {
  const { animeList, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!animeList) {
    return (
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No Animes Found
      </h2>
    );
  }

  return (
    <Container className="justify-content-center ">
      <div className="row justify-content-around">
        {animeList &&
          animeList.map((item) => {
            return <Anime key={item.id} {...item} />;
          })}
      </div>
    </Container>
  );
}
