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

  previousImageHandler = () => {
    const newPersonnage = {...this.state.personnage};
    if (this.state.personnage.image === 1) {
      newPersonnage.image = 3;
    }
    else {
      newPersonnage.image -= 1;
    }

    this.setState({personnage: newPersonnage});
  }

  nextImagetHandler = () => {
    const newPersonnage = { ...this.state.personnage };
    if (this.state.personnage.image === 3) {
      newPersonnage.image = 1;
    }
    else {
      newPersonnage.image += 1;
    }

    this.setState({personnage: newPersonnage});
  }


  render(){
    return (
        <div className="container">
          <TitreH1>Créateur de personnage</TitreH1>
          <Personnage {...this.state.personnage} previous={this.previousImageHandler} next={this.nextImagetHandler}/>
          <div>Armes</div>
          <Bouton type="btn-danger" click={() => console.log("réinitialiser...")}>Réinitialiser</Bouton>
          <Bouton type="btn-success" click={() => console.log("créer...")}>Créer</Bouton>
        </div>
    );
  }
}

export default CreateurPersonnage;
