import React, { Component } from "react";
import "./App.scss";
import CreateurPersonnage from "./containers/CreateurPersonnage/CreateurPersonnage";
import ListePersonnages from "./containers/ListePersonnages/ListePersonnages"

class App extends Component{
  state = {
    refresh: false
  }

  handleRefresh = () => {
    this.setState((oldState) => {
      return {
        refresh: !oldState.refresh
      };

    });
  }

  render(){
    return (
      <>
        <CreateurPersonnage refresh = {this.handleRefresh}/>
        <ListePersonnages refresh = {this.state.refresh}/>
      </>
    );
  }
}

export default App;
