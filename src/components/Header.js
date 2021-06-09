import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../images/favicon/favicon-big.png";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Anime List
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
