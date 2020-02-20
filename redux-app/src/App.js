import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";
import { Switch, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import CharactersList from "./Components/CharactersList";
import LocationsList from "./Components/LocationsList";

const TopNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function App({ locations, spinnerOn, fetchCharacters, fetchLocations }) {
  useEffect(() => {
    fetchCharacters();
    fetchLocations();
  }, []);

  if (spinnerOn) {
    return (
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <TopNav>
        <NavLink exact to="/" activeClassName="active" replace>
          HOME
        </NavLink>
        <NavLink exact to="/characters/list" activeClassName="active" replace>
          CHARACTERS
        </NavLink>
        <NavLink exact to="/locations/list" activeClassName="active" replace>
          LOCATIONS
        </NavLink>
      </TopNav>
      <Switch>
        <Route exact path="/">
          <div>HOME</div>
        </Route>
        <Route exact path="/characters/list">
          <CharactersList />
        </Route>
        <Route exact path="/locations/list">
          <LocationsList />
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    locations: state.locations,
    spinnerOn: state.spinnerOn
  };
}

export default connect(mapStateToProps, actionCreators)(App);
