import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Anime({ title, image_url, synopsis, url }) {
  return (
    <div className="p-3">
      <Card style={{ width: "12rem" }} className="h-100">
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{synopsis}</Card.Text>
          <Button variant="primary" className="mt-auto" href={url}>
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
