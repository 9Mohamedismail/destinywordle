import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Cols = styled(Col)`
  border: 1px solid;
`;

function TableHeader(props) {
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

      {props.data.map(([name, details]) => (
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
      ))}
    </>
  );
}

export default TableHeader;
