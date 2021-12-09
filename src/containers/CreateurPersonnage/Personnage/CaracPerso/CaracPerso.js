import React from "react";
import Carac from "./Carac/Carac";

const CaracPerso = (props) => {
  return (
    <>
      <div>Points restants : <span className="badge bg-success">{props.nbPointsDisponibles}</span></div>
      <Carac
        nbPoints={props.strength}
        decrease={() => props.decrease('strength')}
        augment={() => props.augment('strength')}
      >Force</Carac>
      <Carac
        nbPoints={props.agility}
        decrease={() => props.decrease('agility')}
        augment={() => props.augment('agility')}
      >Agilité</Carac>
      <Carac
        nbPoints={props.intelligence}
        decrease={() => props.decrease('intelligence')}
        augment={() => props.augment('intelligence')}
      >Intelligence</Carac>
    </>
  );
};

export default CaracPerso;
