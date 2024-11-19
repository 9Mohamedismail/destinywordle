import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Cols = styled(Col)`
  border: 1px solid;
  text-align: center;
  font-family: Roboto Slab, sans-serif;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isMatch }) => (isMatch ? "green" : "red")};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const getMatchResults = (guessObject, answerObject) => {
  const matchResults = {};
  for (let key in guessObject) {
    matchResults[key] = guessObject[key] === answerObject[key];
  }
  return matchResults;
};

function MatchColumn({ label, isMatch }) {
  return <Cols isMatch={isMatch}>{label}</Cols>;
}

function Table({ addRow, lastGuess, answer }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!lastGuess || lastGuess.length === 0) return;

    const matchResults = getMatchResults(lastGuess, answer);

    setRows((prevRows) => [
      ...prevRows,
      {
        details: lastGuess,
        matches: { ...matchResults },
      },
    ]);
  }, [addRow]);

  return (
    <>
      {rows.map(({ details, matches }, index) => (
        <Container key={index}>
          <Row>
            <Cols>
              <Img src={details.icon} alt="Icon" />
            </Cols>
            {Object.keys(details).map(
              (key) =>
                key !== "icon" && (
                  <MatchColumn
                    key={key}
                    label={details[key]}
                    isMatch={matches[key]}
                  />
                )
            )}
          </Row>
        </Container>
      ))}
    </>
  );
}

export default Table;
