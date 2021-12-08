import React from "react";
import ImagePerso from "./ImagePerso/ImagePerso";

const Personnage = (props) => (
  <div className= "row no-gutters">
    <div className="col-6" ><ImagePerso numImage={props.image} /></div>
    <div className="col-6">
      <div>Force : {props.force}</div>
      <div>Agilité : {props.force}</div>
      <div>Intelligence : {props.force}</div>
    </div>
  </div>
);

export default Personnage;
