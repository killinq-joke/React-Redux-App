import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

import CharactersList from "./Components/CharactersList";

function App({ data, spinnerOn, fetchData }) {
  console.log(data);

  useEffect(() => {
    fetchData();
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
    data: state.data,
    spinnerOn: state.spinnerOn
  };
}

export default connect(mapStateToProps, actionCreators)(App);
