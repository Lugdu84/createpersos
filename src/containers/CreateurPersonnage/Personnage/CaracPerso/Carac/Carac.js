import React from "react";
import { BsPatchMinusFill, BsPatchPlusFill} from "react-icons/bs";

const Carac = (props) => {
  let afficheCarac = props.nbPoints * "*";
  return (
    <>
      <div>{props.children} : {afficheCarac}<BsPatchMinusFill className="text-warning" /> <BsPatchPlusFill className="text-warning"/></div>
    </>
  );
};

export default Carac;
