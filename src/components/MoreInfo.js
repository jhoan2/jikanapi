import React from "react";
import { useParams } from "react-router-dom";

export default function MoreInfo() {
  const { id } = useParams();

  React.useEffect(() => {
    async function moreInfo() {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v3/search/anime/${id}`
        );

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);
  return (
    <div>
      <p>hello</p>
    </div>
  );
}
