import React, { useState, useEffect } from "react";
import TableRows from "./TableRows";

// Compares player's guess to the selectedCharacter.
const getMatchResults = (currentGuess, selectedCharacter) => {
  const matchResults = {};
  for (let key in currentGuess) {
    matchResults[key] = currentGuess[key] === selectedCharacter[key];
  }
  return matchResults;
};

function TableLogic({ guesses, selectedCharacter }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!guesses || guesses.length === 0) return;
    const currentGuess = guesses[guesses.length - 1];

    const matchResults = getMatchResults(currentGuess, selectedCharacter);

    setRows((prevRows) => [
      ...prevRows,
      {
        details: currentGuess,
        matches: { ...matchResults },
      },
    ]);
  }, [guesses]);

  return <TableRows rows={rows} />;
}

export default TableLogic;
