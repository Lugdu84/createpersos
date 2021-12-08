import React, { Component, Fragment } from "react";
import "./App.scss";
import Bouton from "./components/Bouton/Bouton";
import TitreH1 from "./components/Titres/TitreH1";

class App extends Component{
  render(){
    return (
      <Fragment>
        <div className="container">
            <TitreH1>Créateur de personnage</TitreH1>
            <div>Personnage</div>
            <div>Armes</div>
            <Bouton type="btn-danger" click={() => console.log("réinitialiser...")}>Réinitialiser</Bouton>
            <Bouton type="btn-success" click={() => console.log("créer...")}>Créer</Bouton>
        </div>
      </Fragment>
    );
  }
}

export default App;
