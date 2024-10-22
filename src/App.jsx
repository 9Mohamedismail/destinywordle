import { React, useState } from "react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import jsonData from "./test.json";

function App() {
  const [inputText, setInputText] = useState("");
  const [addRow, setAddRow] = useState([]);
  const [lastGuess, setLastGuess] = useState([]);

  const answer = Object.entries(jsonData).find(([key]) => key === "Test"); // the correct answer (randomized)

  const HandleClick = () => {
    const newRow = Object.entries(jsonData).find(([key]) => key === inputText);

    if (newRow) {
      setAddRow([...addRow, newRow]);
      setLastGuess(newRow);
      setInputText("");
    } else {
      console.log("Error!");
    }
  };

  return (
    <>
      <SearchBar
        setInputText={setInputText}
        inputText={inputText}
        HandleClick={HandleClick}
      />
      <Table
        addRow={addRow}
        lastGuess={lastGuess}
        setLastGuess={setLastGuess}
        answer={answer}
      />
    </>
  );
}

export default App;
