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

function Table({ addRow, lastGuess, answer }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!lastGuess || lastGuess.length === 0) return;

    const nameMatches = lastGuess[0] === answer[0];

    const matchResults = getMatchResults(lastGuess[1], answer[1]);

    setRows((prevRows) => [
      ...prevRows,
      {
        name: lastGuess[0],
        details: lastGuess[1],
        matches: { name: nameMatches, ...matchResults },
      },
    ]);
  }, [addRow]);

  return (
    <>
      {rows.map(({ name, details, matches }, index) => (
        <Container key={index}>
          <Row>
            <Cols style={{ backgroundColor: "gray" }}>
              <Img src={`/public/${name}.jpg`} />
            </Cols>
            <Cols style={{ backgroundColor: matches.name ? "green" : "red" }}>
              {name}
            </Cols>
            <Cols
              style={{ backgroundColor: matches.faction ? "green" : "red" }}
            >
              <Img src={details.faction} />
            </Cols>
            <Cols
              style={{ backgroundColor: matches.species ? "green" : "red" }}
            >
              {details.species}
            </Cols>
            <Cols style={{ backgroundColor: matches.role ? "green" : "red" }}>
              {details.role}
            </Cols>
            <Cols
              style={{ backgroundColor: matches.location ? "green" : "red" }}
            >
              {details.location}
            </Cols>
            <Cols
              style={{ backgroundColor: matches.apperance ? "green" : "red" }}
            >
              {details.apperance}
            </Cols>
            <Cols style={{ backgroundColor: matches.status ? "green" : "red" }}>
              {details.status}
            </Cols>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default Table;
