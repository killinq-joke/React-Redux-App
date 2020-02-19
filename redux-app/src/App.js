import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

import CharactersList from "./Components/CharactersList";

function App({ spinnerOn, fetchData }) {
  useEffect(() => {
    fetchData();
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
      <CharactersList />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
    spinnerOn: state.spinnerOn
  };
}

export default connect(mapStateToProps, actionCreators)(App);
