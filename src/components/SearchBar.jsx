import React from "react";
import Button from "react-bootstrap/Button";

function SearchBar({ setInputText, inputText, HandleClick }) {
  return (
    <>
      <input
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      ></input>

      <Button variant="primary" type="submit" onClick={HandleClick}>
        Primary
      </Button>
    </>
  );
}

export default SearchBar;
