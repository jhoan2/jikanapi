import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Anime({ title, image_url, synopsis }) {
  return (
    <div>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{synopsis}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
