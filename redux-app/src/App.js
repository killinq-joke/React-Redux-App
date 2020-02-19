import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

import CharactersList from "./Components/CharactersList";

function App({ characters, spinnerOn, fetchCharacters }) {
  console.log(characters);

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (spinnerOn) {
    return <div className="spinner">Please Wait</div>;
  }

  return (
    <div className="App">
      <CharactersList />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    spinnerOn: state.spinnerOn
  };
}

export default connect(mapStateToProps, actionCreators)(App);
