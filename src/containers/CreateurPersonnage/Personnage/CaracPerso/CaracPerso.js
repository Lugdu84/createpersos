import React from "react";

const CaracPerso = (props) => {
  return (
    <>
      <div>Points restants : <span className="badge bg-success">{props.nbPointsDisponibles}</span></div>
      <div>Force : {props.force}</div>
      <div>Agilité : {props.agilité}</div>
      <div>Intelligence : {props.intelligence}</div>
    </>
  );
};

export default CaracPerso;
