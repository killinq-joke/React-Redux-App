import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Character from "./Character";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
background: green;
color: white;
border: 0;
border-radius: 20px;
padding: 10px 60px;
margin: 10px;
cursor: pointer;
&:hover {
    background: red;
}
`

function CharactersList({ characters }) {
  return (
    <div>
      <Button>PREV</Button>
      <Button>NEXT</Button>

      <Container>
        {characters.map(character => {
          return (
            <Character
              key={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}
      </Container>

      <Button>PREV</Button>
      <Button>NEXT</Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, actionCreators)(CharactersList);
