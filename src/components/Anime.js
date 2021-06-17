import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Anime({ title, image_url, synopsis, mal_id: id }) {
  return (
    <div className="p-3">
      <Card style={{ width: "12rem" }} className="h-100">
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{synopsis}</Card.Text>
          <Button variant="dark" className="mt-auto">
            <Link key={id} to={`/anime/${id}`}>
              Read More
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
