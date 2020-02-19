import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

function App({ characters, spinnerOn, fetchCharacters }) {
  console.log(characters)
  useEffect(() => {
    fetchCharacters()
  }, [])

  return(
    <div className="App">
      
    </div>
  ) 
}

function mapStateToProps(state) {
  return {
    // what props do we want the component to get?
    characters: state.characters,
    spinnerOn: state.spinnerOn
  };
}

// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
export default connect(
  mapStateToProps,
  actionCreators // STEP-9 BRING IN THE ACTION CREATORS
)(App);
