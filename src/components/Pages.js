import React from "react";
import { useGlobalContext } from "../context";
import { Pagination } from "react-bootstrap";

const Pages = () => {
  const { page, handlePage, lastPage } = useGlobalContext();

  let items = [];
  for (let i = 1; i < lastPage; i++) {
    items.push(i);
  }
  return (
    <Pagination className="justify-content-center">
      {items.map((item) => {
        return (
          <Pagination.Item
            key={item}
            active={item === parseInt(page)}
            onClick={(e) => handlePage(e.target.innerHTML)}
          >
            {item}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default Pages;
