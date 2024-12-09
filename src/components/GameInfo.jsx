import { useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Containter = styled.div`
  padding: 10px;
  text-align: center;
  font-family: "Lucida Grande", Arial;
  font-weight: bold;
  color: #bda775;
  font-size: 50px;
`;

const InfoContainer = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1.2rem;
`;

const GameOverContainer = styled.div`
  border: 5px solid #bda775;
  color: black;
  display: inline-block;
  padding: 1rem 5rem 1rem 5rem;
  font-size: 1.5rem;
  background-color: ${({ userWon }) => (userWon ? "LightGreen" : "IndianRed")};
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
      <p>Destiny Rising Wordle</p>
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
        <GameOverContainer userWon={guesses.length < 5}>
          {guesses.length < 5 ? <h1>You won!</h1> : <h1>Game over!</h1>}
          <p>The Character was {selectedCharacter.name} </p>
        </GameOverContainer>
      )}
    </Containter>
  );
}

export default GameInfo;
