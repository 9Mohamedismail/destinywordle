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
            <Cols style={{ backgroundColor: "gray" }}>
              <Img src={details.icon} />
            </Cols>
            <Cols style={{ backgroundColor: matches.name ? "green" : "red" }}>
              {details.name}
            </Cols>
            <Cols style={{ backgroundColor: matches.rarity ? "green" : "red" }}>
              {details.rarity}
            </Cols>
            <Cols
              style={{ backgroundColor: matches.element ? "green" : "red" }}
            >
              {details.element}
            </Cols>
            <Cols style={{ backgroundColor: matches.role ? "green" : "red" }}>
              {details.role}
            </Cols>
            <Cols style={{ backgroundColor: matches.gender ? "green" : "red" }}>
              {details.gender}
            </Cols>
            <Cols style={{ backgroundColor: matches.class ? "green" : "red" }}>
              {details.class}
            </Cols>
            <Cols
              style={{
                backgroundColor: matches.primary_weapon ? "green" : "red",
              }}
            >
              {details.primary_weapon}
            </Cols>
            <Cols
              style={{
                backgroundColor: matches.power_weapon ? "green" : "red",
              }}
            >
              {details.power_weapon}
            </Cols>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default Table;
