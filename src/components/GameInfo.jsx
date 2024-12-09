import { useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Containter = styled.div`
  padding: 10px;
  text-align: center;
  font-family: "Lucida Grande", Arial;
  font-weight: bold;
  color: #bda775;
`;

const InfoContainer = styled.div`
  font-size: 1.2rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const GameOverContainer = styled.div`
  padding: 10px;
  text-align: center;
  font-family: "Lucida Grande", Arial;
  font-weight: bold;
  color: #bda775;
`;

function GameInfo({
  setCurrentGuess,
  currentGuess,
  HandleButton,
  guesses,
  gameOver,
  setGameOver,
  selectedCharacter,
}) {
  useEffect(() => {
    if (guesses.length >= 5) {
      setGameOver(true);
    }
  }, [guesses]);

  return (
    <Containter>
      <h1>Destiny Rising Wordle</h1>
      <InfoContainer>
        <p>Tries {guesses.length}/5 </p>
        <p>Win Streak: 0</p>
      </InfoContainer>

      {!gameOver && (
        <SearchBarContainer>
          <SearchBar
            setCurrentGuess={setCurrentGuess}
            currentGuess={currentGuess}
            HandleButton={HandleButton}
          />
        </SearchBarContainer>
      )}

      {gameOver && (
        <GameOverContainer>
          {guesses.length < 5 ? <h1>You won!</h1> : <h1>Game over!</h1>}
          <p>The Character was {selectedCharacter.name} </p>
        </GameOverContainer>
      )}
    </Containter>
  );
}

export default GameInfo;
