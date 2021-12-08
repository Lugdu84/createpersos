import React from "react";
import CaracPerso from "./CaracPerso/CaracPerso";
import ImagePerso from "./ImagePerso/ImagePerso";

const Personnage = (props) => (
  <div className= "row no-gutters">
    <div className="col-6" >
      <ImagePerso numImage={props.image} previous={props.previous} next={props.next}/>
    </div>
    <div className="col-6">
      <CaracPerso points={props.points} force={props.force} agilité={props.agilité} intelligence={props.intelligence}/>
    </div>
  </div>
);

export default Personnage;
