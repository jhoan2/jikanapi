import React from "react";
import { useGlobalContext } from "../context";
import { InputGroup, Badge, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const { query, handleSearch } = useGlobalContext();
  return (
    <InputGroup className="mb-3 p-5" onSubmit={(e) => e.preventDefault()}>
      <InputGroup.Prepend>
        <Badge variant="dark">
          <FaSearch size={30} />
        </Badge>
      </InputGroup.Prepend>
      <FormControl
        alt="searchbar"
        type="text"
        value={query}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </InputGroup>
  );
}
