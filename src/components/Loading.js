import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div>
      <Spinner animation="grow" variant="dark" />
    </div>
  );
}
