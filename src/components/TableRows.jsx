import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Cols = styled(Col)`
  border: 1px solid;
  text-align: center;
  font-family: "Lucida Grande", Arial;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isMatch }) =>
    isMatch ? "rgb(29, 145, 40)" : "rgb(126, 25, 25)"};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

// Handles render of colored columns depending on if its correct or not.
function MatchColumn({ label, isMatch }) {
  return <Cols isMatch={isMatch}>{label}</Cols>;
}

function TableRows({ rows }) {
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

export default TableRows;
