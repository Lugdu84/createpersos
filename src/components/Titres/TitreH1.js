import React from "react";
import classe from "./TitreH1.module.scss";

const TitreH1 = (props) => {
  return <h1 className={classe.titreH1}>{props.children}</h1>
};

export default TitreH1;
