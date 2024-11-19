import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Cols = styled(Col)`
  border: 1px solid;
  font-family: "Lucida Grande", Arial;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  background-color: #bda775;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

function TableHeader() {
  return (
    <>
      <Container>
        <Row>
          <Cols className="table-primary">Photo</Cols>
          <Cols>Name</Cols>
          <Cols>Rarity</Cols>
          <Cols>Element</Cols>
          <Cols>Role</Cols>
          <Cols>Gender</Cols>
          <Cols>Class</Cols>
          <Cols>Primary Weapon</Cols>
          <Cols>Power Weapon</Cols>
        </Row>
      </Container>
    </>
  );
}

export default TableHeader;
