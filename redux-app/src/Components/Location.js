import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 2px;
`;

export default function Location({ name, type, dimension }) {
  return (
    <Card>
      <h3>{name}</h3>
      <h4>type: {type}</h4>
      <h4>dimension: {dimension}</h4>
    </Card>
  );
}
