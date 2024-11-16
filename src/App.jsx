import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TableRows from "./components/TableRows";
import jsonData from "./test.json";
import gachaDestinyData from "./util/destiny_rising_characters.json"
import TableHeader from "./components/TableHeader";


function App() {
  const [inputText, setInputText] = useState("");
  const [addRow, setAddRow] = useState([]);
  const [lastGuess, setLastGuess] = useState([]);
  console.debug(gachaDestinyData);

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gachaDestinyData.length);
    setSelectedCharacter(gachaDestinyData[randomIndex]);
  }, []);
  console.debug("Random character is: ", selectedCharacter);
  const answer = Object.entries(jsonData).find(([key]) => key === "Cayde-6"); // the correct answer (randomized)

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
      <TableHeader />
      <TableRows addRow={addRow} lastGuess={lastGuess} answer={answer} />
    </>
  );
}

export default App;
