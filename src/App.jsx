import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TableLogic from "./components/TableLogic";
import GameInfo from "./components/GameInfo";
import gachaDestinyData from "./util/destiny_rising_characters.json";
import TableHeader from "./components/TableHeader";
import { use } from "react";

function App() {
  const [guesses, setGuesses] = useState([]); // Array holding guesses player has made.
  const [currentGuess, setCurrentGuess] = useState(""); // Current guess from searchBar.
  const [gameOver, setGameOver] = useState(false);
  console.debug(gachaDestinyData);

  // Selected character to be guessed.
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gachaDestinyData.length);
    setSelectedCharacter(gachaDestinyData[randomIndex]);
  }, []);
  console.debug("Random character is: ", selectedCharacter);

  useEffect(() => {
    const guessesStorage = window.localStorage.getItem("Guesses");
    const characterStorage = window.localStorage.getItem("Character");
    if (guessesStorage && characterStorage) {
      setGuesses(JSON.parse(guessesStorage));
      setSelectedCharacter(JSON.parse(characterStorage));
    }
  }, []);

  useEffect(() => {
    if (guesses.length > 0) {
      window.localStorage.setItem("Guesses", JSON.stringify(guesses));
      window.localStorage.setItem(
        "Character",
        JSON.stringify(selectedCharacter)
      );
    }
  }, [guesses, selectedCharacter]);

  // Checks if players's guess is valid & either adds it to array or gives error.
  const HandleButton = () => {
    const currentGuessObject = gachaDestinyData.find(
      (character) => character.name === currentGuess
    );

    if (currentGuessObject) {
      if (currentGuessObject === selectedCharacter) {
        setGameOver(true);
      }
      setGuesses([...guesses, currentGuessObject]);
      setCurrentGuess("");
    } else {
      console.log("Invalid guess!");
    }
  };

  useEffect(() => {
    if (gameOver) {
      window.localStorage.removeItem("Guesses");
      window.localStorage.removeItem("Character");
    }
  }, [gameOver]);

  return (
    <div
      style={{
        backgroundImage: `url('https://www.playdestinyrising.com/pc/gw/20240910191703/img/bg_bottom_a9bfa83d.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150vh",
      }}
    >
      <GameInfo
        setCurrentGuess={setCurrentGuess}
        currentGuess={currentGuess}
        HandleButton={HandleButton}
        guesses={guesses}
        gameOver={gameOver}
        setGameOver={setGameOver}
        selectedCharacter={selectedCharacter}
      />
      <TableHeader />
      <TableLogic guesses={guesses} selectedCharacter={selectedCharacter} />
    </div>
  );
}

export default App;
