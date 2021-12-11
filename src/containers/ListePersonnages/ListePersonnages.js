import React, { Component } from "react";
import axios from "axios";
import Personnage from  "./Personnage/Personnage";

class ListePersonnages extends Component{
  state = {
    personnages : null,
    loading : false
  }

  loadData = () => {
    this.setState({ loading: true });
    axios
      .get("https://mysalaat-fc913.firebaseio.com/persos.json")
      .then((response) => {
        const personnages = Object.values(response.data);
        this.setState({
          personnages,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }


  componentDidMount = () =>  {
    this.loadData();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.refresh !== this.props.refresh){
      this.loadData();
    }
  }



  render(){
    return (
      <>
        {this.state.loading && <div>Chargement en cours ...</div>}
        {!this.state.loading && this.state.personnages && (
          <div className="container">
            <div className="row no-gutters">
              {this.state.personnages.map((perso, indice) => {
                return (
                  <div className="col-12 col-md-6" key={indice}>
                    <Personnage {...perso} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ListePersonnages;
