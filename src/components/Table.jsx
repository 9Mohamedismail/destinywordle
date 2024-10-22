import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Cols = styled(Col)`
  border: 1px solid;
`;

function TableHeader({ addRow, lastGuess, setLastGuess, answer }) {
  const checkProp = () => {
    console.log(lastGuess);
    console.log(answer);
    if (lastGuess[0] === answer[0]) {
      console.log("Congrats!");
      setLastGuess("");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Cols class="border-end">Photo</Cols>
          <Cols>Name</Cols>
          <Cols>Faction</Cols>
          <Cols>Role/Occuipation</Cols>
          <Cols>Location</Cols>
          <Cols>Season/Expansion</Cols>
          <Cols>Status</Cols>
        </Row>
      </Container>

      {addRow.map(([name, details]) => (
        <>
          {checkProp()}
          <Container>
            <Row>
              <Cols class="border-end">Photo</Cols>
              <Cols>{name}</Cols>
              <Cols>{details.faction}</Cols>
              <Cols>{details.role}</Cols>
              <Cols>{details.location}</Cols>
              <Cols>{details.season}</Cols>
              <Cols>{details.status}</Cols>
            </Row>
          </Container>
        </>
      ))}
    </>
  );
}

export default TableHeader;
