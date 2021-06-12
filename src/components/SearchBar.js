import React from "react";
import { useGlobalContext } from "../context";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default function SearchBar() {
  const { query, handleSearch } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          type="submit"
          onSubmit={handleSubmit}
        >
          Button
        </Button>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        value={query}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </InputGroup>
  );
}
