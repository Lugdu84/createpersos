import React from "react";

const Bouton = (props) => {
  const monCss = `btn ${props.type} w-50`;
  return <button className={monCss} onClick={props.click}>{props.children}</button>
};

export default Bouton;
