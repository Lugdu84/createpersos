import React from "react";
import { BsPatchMinusFill, BsPatchPlusFill} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";



const Carac = (props) => {

  const realCaracs = [];
  for (let index = 0; index < props.nbPoints; index++) {
    realCaracs.push(< AiFillStar key={index} className="text-danger" />);
  }

  return (
    <>
      <div>{props.children} : {realCaracs}
        <BsPatchMinusFill
          className="text-warning"
          onClick={props.decrease}
        />
        <BsPatchPlusFill
          className="text-warning"
          onClick={props.augment}
        />
      </div>
    </>
  );
};

export default Carac;
