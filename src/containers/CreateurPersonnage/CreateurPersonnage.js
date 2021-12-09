import React, { Component } from "react";
import Bouton from "../../components/Bouton/Bouton";
import TitreH1 from "../../components/Titres/TitreH1";
import Personnage from "./Personnage/Personnage";
import Weapons from "./Weapons/Weapons";

class CreateurPersonnage extends Component{

  state = {
    personnage: {
      nbPointsDisponibles: 7,
      image: 1,
      strength: 0,
      agility: 0,
      intelligence: 0,
      weapon: null
    },
    weapons: ["sword", "scourge", "bow", "axe"],
  }

  previousImageHandler = () => {
    this.setState(oldState => {
      const newPersonnage = {...oldState.personnage};
      if (oldState.personnage.image === 1) newPersonnage.image = 3;
      else newPersonnage.image --;
      return{personnage: newPersonnage};
    })
  }

  nextImageHandler = () => {
    const newPersonnage = { ...this.state.personnage };
    if (this.state.personnage.image === 3) {
      newPersonnage.image = 1;
    }
    else {
      newPersonnage.image += 1;
    }

    this.setState({personnage: newPersonnage});
  }

  decreaseCaracHandler = (carac) => {

    this.setState((oldState, props) => {
      if (oldState.personnage[carac] > 0 && oldState.personnage['nbPointsDisponibles'] >= 0) {
        const newPersonnage = { ...oldState.personnage }
        newPersonnage[carac] --;
        newPersonnage['nbPointsDisponibles'] ++;
        return { personnage: newPersonnage };
      }
      else {
        return null;
      }
    })
  }

  augmentCaracHandler = (carac) => {

    this.setState((oldState, props) => {

      if (oldState.personnage[carac] < 5 && oldState.personnage['nbPointsDisponibles'] > 0) {
        const newPersonnage = { ...oldState.personnage }
        newPersonnage[carac] ++;
        newPersonnage['nbPointsDisponibles'] --;
        return { personnage: newPersonnage };
      }
      else {
        return null
      }
    })
  }

  selectWeaponHandler = (weapon) => {
    this.setState(oldState => {
      const newPersonnage = {...oldState.personnage};
      newPersonnage.weapon = weapon;
      return {personnage: newPersonnage};
    })
  }

  resetPersonnageHandler = () => {
    this.setState({
      personnage: {
        nbPointsDisponibles: 7,
        image: 1,
        strength: 0,
        agility: 0,
        intelligence: 0,
        weapon: null
      },
    })
  }

  creatPersonnageHandler = () => {
    console.log("création du personnage ...");
  }

  render(){
    return (
        <div className="container">
          <TitreH1>Créateur de personnage</TitreH1>
          <Personnage
            {...this.state.personnage}
            previous={this.previousImageHandler}
            next={this.nextImageHandler}
            decrease={this.decreaseCaracHandler}
            augment={this.augmentCaracHandler}
          />
          <Weapons
            listWeapons = {this.state.weapons}
            selectWeapon = {this.selectWeaponHandler}
          />
          <Bouton
            type="btn-danger"
            click={this.resetPersonnageHandler}>Réinitialiser</Bouton>
          <Bouton type="btn-success" click={this.creatPersonnageHandler}>Créer</Bouton>
        </div>
    );
  }
}

export default CreateurPersonnage;
