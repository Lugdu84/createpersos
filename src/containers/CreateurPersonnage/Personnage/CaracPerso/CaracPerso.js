import React from "react";
import Carac from "./Carac/Carac";

const CaracPerso = (props) => {
  return (
    <>
      <div>Points restants : <span className="badge bg-success">{props.nbPointsDisponibles}</span></div>
      <Carac
        nbPoints={props.force}
        decrease={() => props.decrease('force')}
        augment={() => props.augment('force')}
      >Force</Carac>
      <Carac
        nbPoints={props.agilité}
        decrease={() => props.decrease('agilité')}
        augment={() => props.augment('agilité')}
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
