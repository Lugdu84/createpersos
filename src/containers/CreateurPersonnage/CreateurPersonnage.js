import React, { Component } from "react";
import Bouton from "../../components/Bouton/Bouton";
import TitreH1 from "../../components/Titres/TitreH1";
import Personnage from "./Personnage/Personnage";
import Weapons from "./Weapons/Weapons";
import axios from "axios";
import Form from "react-bootstrap/Form";

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
    weapons: null,
    loading: false,
    name: ""
  }

  componentDidMount = () => {
    this.setState({loading: true})
    axios.get("https://mysalaat-fc913.firebaseio.com/weapons.json")
      .then(response => {
        const weapons = Object.values(response.data);
        this.setState({
          weapons: weapons,
          loading: false
        })
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false})
      })
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
      name: ""
    })
  }

  creatPersonnageHandler = () => {
    this.setState({loading: true});
    const player = {
      perso : {...this.state.personnage},
      name: this.state.name
    }
    axios.post("https://mysalaat-fc913.firebaseio.com/persos.json", player)
      .then(response => {
        console.log(response);
        this.setState({loading: false});
        this.resetPersonnageHandler();
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false});
        this.resetPersonnageHandler();
      })
  }

  render(){
    return (
        <div className="container">
          <TitreH1>Créateur de personnage</TitreH1>
          <Form.Group className="mb-3" controlId="inputName">
            <Form.Label>Pseudo : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre pseudo"
              value={this.state.name}
              onChange={event => this.setState({name: event.target.value})}
            />
          </Form.Group>
          <Personnage
            {...this.state.personnage}
            previous={this.previousImageHandler}
            next={this.nextImageHandler}
            decrease={this.decreaseCaracHandler}
            augment={this.augmentCaracHandler}
          />
          {
            this.state.loading &&
            <div>Chargement ...</div>
          }

          {
            this.state.weapons &&
            <Weapons
              listWeapons={this.state.weapons}
              selectWeapon={this.selectWeaponHandler}
            />
          }

          <Bouton
            type="btn-danger"
            click={this.resetPersonnageHandler}>Réinitialiser</Bouton>
          <Bouton
            type="btn-success"
            click={this.creatPersonnageHandler}>Créer</Bouton>
        </div>
    );
  }
}

export default CreateurPersonnage;
