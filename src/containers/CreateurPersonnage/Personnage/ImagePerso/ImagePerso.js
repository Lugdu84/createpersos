import React from "react";
import ImagePlayer1 from "../../../../assets/persos/player1.png"
import ImagePlayer2 from "../../../../assets/persos/player2.png"
import ImagePlayer3 from "../../../../assets/persos/player3.png"
import Image from "react-bootstrap/Image";
import classes from "./ImagePerso.module.scss";

const ImagePerso = (props) => {
  let imageToPrint = "";
  if (props.numImage === 1) imageToPrint = ImagePlayer1;
  else if (props.numImage === 2) imageToPrint = ImagePlayer2;
  else if (props.numImage === 3) imageToPrint = ImagePlayer3;

  return (
    <div className={classes.box}>
      <div className={classes.down} onClick={ props.previous}/>
      <Image src={imageToPrint} alt="perso" />
      <div className={classes.up} onClick={props.next} />
    </div>
  );
};

export default ImagePerso;
