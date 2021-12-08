import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import "./App.scss";

class App extends Component{
  render(){
    return (
      <Fragment>
        <div className="container">
            <h1>Créateur de personnage</h1>
            <p>Personnage</p>
            <p>Armes</p>
            <Button variant="danger">Réinitialiser</Button>
            <Button>Créer</Button>
        </div>
      </Fragment>
    );
  }
}

export default App;
