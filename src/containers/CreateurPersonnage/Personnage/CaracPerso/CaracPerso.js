import React from "react";

const CaracPerso = (props) => {
  return (
    <>
      <div>Points restants : {props.points}</div>
      <div>Force : {props.force}</div>
      <div>Agilité : {props.agilité}</div>
      <div>Intelligence : {props.intelligence}</div>
    </>
  );
};

export default CaracPerso;
