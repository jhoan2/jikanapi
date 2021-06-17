import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../images/favicon/favicon-big.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Link>Anime List</Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
