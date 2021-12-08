import React, { Component } from "react";
import Bouton from "../../components/Bouton/Bouton";
import TitreH1 from "../../components/Titres/TitreH1";
import Personnage from "./Personnage/Personnage";

class CreateurPersonnage extends Component{

  state = {
    personnage: {
      image: 1,
      force: 0,
      agilité: 0,
      intelligence: 0
    }
}


  render(){
    return (
        <div className="container">
          <TitreH1>Créateur de personnage</TitreH1>
          <Personnage {...this.state.personnage}/>
          <div>Armes</div>
          <Bouton type="btn-danger" click={() => console.log("réinitialiser...")}>Réinitialiser</Bouton>
          <Bouton type="btn-success" click={() => console.log("créer...")}>Créer</Bouton>
        </div>
    );
  }
}

export default CreateurPersonnage;
