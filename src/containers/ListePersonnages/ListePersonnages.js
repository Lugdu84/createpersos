import React, { Component } from "react";
import axios from "axios";

class ListePersonnages extends Component{
  state = {
    personnages : null,
    loading : false
  }


  componentDidMount = () =>  {
    this.setState({loading: true});
    axios.get("https://mysalaat-fc913.firebaseio.com/persos.json")
      .then(response => {
        console.log(response.data);
        const personnages = Object.values(response.data);
        this.setState({
          personnages,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false})
      })
  }



  render(){
    return (
      <>
        {
          this.state.loading && <div>Chargement en cours ...</div>
        }
        {
          !this.state.loading && this.state.personnages &&
          <div className="container">
            <div className="row no-gutters">
              {this.state.personnages.map((perso, indice) => {
                return <div className="col-6" key={indice}>{perso["name"]}</div>
              })}
            </div>
          </div>
        }
      </>
    );
  }
}

export default ListePersonnages;
