import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TableRows from "./components/TableRows";
import gachaDestinyData from "./util/destiny_rising_characters.json";
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

  const HandleClick = () => {
    const newRow = gachaDestinyData.find(
      (character) => character.name === inputText
    );

    if (newRow) {
      setAddRow([...addRow, newRow]);
      setLastGuess(newRow);
      setInputText("");
    } else {
      console.log("Error!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://www.playdestinyrising.com/pc/gw/20240910191703/img/bg_bottom_a9bfa83d.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <SearchBar
        setInputText={setInputText}
        inputText={inputText}
        HandleClick={HandleClick}
      />
      <TableHeader />
      <TableRows
        addRow={addRow}
        lastGuess={lastGuess}
        answer={selectedCharacter}
      />
    </div>
  );
}

export default App;
