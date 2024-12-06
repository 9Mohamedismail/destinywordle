import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TableLogic from "./components/TableLogic";
import gachaDestinyData from "./util/destiny_rising_characters.json";
import TableHeader from "./components/TableHeader";

function App() {
  const [guesses, setGuesses] = useState([]); // Array holding guesses player has made.
  const [currentGuess, setCurrentGuess] = useState(""); // Current guess from searchBar.
  console.debug(gachaDestinyData);

  // Selected character to be guessed.
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gachaDestinyData.length);
    setSelectedCharacter(gachaDestinyData[randomIndex]);
  }, []);
  console.debug("Random character is: ", selectedCharacter);

  // Checks if players's guess is valid & either adds it to array or gives error.
  const HandleButton = () => {
    const currentGuessObject = gachaDestinyData.find(
      (character) => character.name === currentGuess
    );

    if (currentGuessObject) {
      setGuesses([...guesses, currentGuessObject]);
      setCurrentGuess("");
    } else {
      console.log("Invalid guess!");
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
        setCurrentGuess={setCurrentGuess}
        currentGuess={currentGuess}
        HandleButton={HandleButton}
      />
      <TableHeader />
      <TableLogic guesses={guesses} answer={selectedCharacter} />
    </div>
  );
}

export default App;
