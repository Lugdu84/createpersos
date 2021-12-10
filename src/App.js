import React, { Component } from "react";
import "./App.scss";
import CreateurPersonnage from "./containers/CreateurPersonnage/CreateurPersonnage";
import ListePersonnages from "./containers/ListePersonnages/ListePersonnages"

class App extends Component{
  render(){
    return (
      <>
        <CreateurPersonnage />
        <ListePersonnages />
      </>
    );
  }
}

export default App;
