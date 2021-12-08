import React from "react";
import Carac from "./Carac/Carac";

const CaracPerso = (props) => {
  return (
    <>
      <div>Points restants : <span className="badge bg-success">{props.nbPointsDisponibles}</span></div>
      <Carac nbPoints={props.force}>Force</Carac>
      <Carac nbPoints={props.agilité}>Agilité</Carac>
      <Carac nbPoints={props.intelligence}>Intelligence</Carac>
    </>
  );
};

export default CaracPerso;
