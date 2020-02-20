import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Location from "./Location";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  background: rgb(21, 216, 21);
  color: white;
  border: 0;
  border-radius: 20px;
  padding: 10px 60px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background: rgb(16, 173, 16);
  }
  &:focus {
      outline: none;
  }
`;

function LocationList({ locations, handleButton }) {
    return(
        <div>
      <Button onClick={evt => handleButton(locations.prev)}>PREV</Button>
      <Button onClick={evt => handleButton(locations.next)}>NEXT</Button>

      <Container>
        {locations.locations.map(location => {
          return (
            <Location
              key={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
            />
          );
        })}
      </Container>

      <Button onClick={evt => handleButton(locations.prev)}>PREV</Button>
      <Button onClick={evt => handleButton(locations.next)}>NEXT</Button>
    </div>
    )
}

function mapStateToProps(state) {
    return {
      locations: state.locations
    };
  }
  
export default connect(mapStateToProps, actionCreators)(LocationList);