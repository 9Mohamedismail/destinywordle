import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Cols = styled(Col)`
  border: 1px solid;
`;

function TableHeader() {
  return (
    <>
      <Container>
        <Row>
          <Cols>Photo</Cols>
          <Cols>Name</Cols>
          <Cols>Faction</Cols>
          <Cols>Species</Cols>
          <Cols>Role/Occuipation</Cols>
          <Cols>Location</Cols>
          <Cols>First Apperance</Cols>
          <Cols>Status</Cols>
        </Row>
      </Container>
    </>
  );
}

export default TableHeader;
