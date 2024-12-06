import React, { useState, useEffect } from "react";
import TableRows from "./TableRows";

// Compares player's guess to the answer.
const getMatchResults = (guessObject, answerObject) => {
  const matchResults = {};
  for (let key in guessObject) {
    matchResults[key] = guessObject[key] === answerObject[key];
  }
  return matchResults;
};

function TableLogic({ guesses, answer }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!guesses || guesses.length === 0) return;
    const currentGuess = guesses[guesses.length - 1];

    const matchResults = getMatchResults(currentGuess, answer);

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
