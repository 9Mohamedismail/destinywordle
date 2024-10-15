import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import jsonData from "./test.json";
import Table from "./Table";

function SearchBar() {
  const [addRow, setAddRow] = useState([]);
  const [search, setSearch] = useState("");

  const HandleChange = (event) => {
    setSearch(event.target.value);
  };

  const HandleClick = () => {
    const newRow = Object.entries(jsonData).find(([key]) => key === search);

    if (newRow) {
      setAddRow([...addRow, newRow]);
    } else {
      console.log("Error!");
    }
  };

  return (
    <>
      <input onChange={HandleChange}></input>

      <Button variant="primary" type="submit" onClick={HandleClick}>
        Primary
      </Button>

      <Table data={addRow} />
    </>
  );
}

export default SearchBar;
