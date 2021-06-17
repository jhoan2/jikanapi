import React from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Col, Row, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function MoreInfo() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [singleAnime, setSingleAnime] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function moreInfo() {
      try {
        const response = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
        const data = await response.json();
        if (data) {
          const {
            episodes,
            rank,
            popularity,
            title,
            image_url: img,
            synopsis,
          } = data;
          const newSingleAnime = {
            episodes,
            rank,
            popularity,
            title,
            img,
            synopsis,
          };
          setSingleAnime(newSingleAnime);
        } else {
          setSingleAnime(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    moreInfo();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!singleAnime) {
    return <h2>No Anime Found</h2>;
  } else {
    const { episodes, rank, popularity, title, img, synopsis } = singleAnime;
    return (
      <Container>
        <Button variant="dark" size="lg" block>
          <Link to={"/"}>Go Back</Link>
        </Button>
        <Row>
          <Col>
            <Image
              src={img}
              rounded
              style={{ width: "12rem", padding: "10px" }}
            />
            <div style={{ width: "10rem", padding: "10px" }}>
              <Card.Footer>Episodes: {episodes}</Card.Footer>
              <Card.Footer>Rank: {rank}</Card.Footer>
              <Card.Footer>Popularity: {popularity}</Card.Footer>
            </div>
          </Col>
          <Col style={{ padding: "10px" }}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
              <Card.Text>{synopsis}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    );
  }
}
