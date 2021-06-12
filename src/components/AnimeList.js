import React from "react";
import { useGlobalContext } from "../context";
import Anime from "./Anime";
import Loading from "./Loading";
import { Container } from "react-bootstrap";

export default function AnimeList() {
  const { animeList, isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  //loading is not working. ned to get that from the state isLoading
  //gotta work on centering the container and then style the contents inside of it
  // gotta get the search function working
  return (
    <Container className="row justify-content-around ">
      {animeList &&
        animeList.map((item) => {
          return <Anime key={item.id} {...item} />;
        })}
    </Container>
  );
}
