import React from "react";
import Image from "react-bootstrap/Image";
import imagePlayer1 from "../../../assets/persos/player1.png";
import imagePlayer2 from "../../../assets/persos/player2.png";
import imagePlayer3 from "../../../assets/persos/player3.png";
import imageBow from "../../../assets/armes/bow.png";
import imageScourge from "../../../assets/armes/scourge.png";
import imageSword from "../../../assets/armes/sword.png";
import imageAxe from "../../../assets/armes/axe.png";
import classes from "./Personnage.module.scss";

const Personnage = (props) => {
  let imagePerso = "";
  if (props.image === 1) imagePerso = imagePlayer1;
  else if (props.image === 2) imagePerso = imagePlayer2;
  else if (props.image === 3) imagePerso = imagePlayer3;

  let imageWeapon ="";
  switch (props.weapon) {
    case "bow": imageWeapon = imageBow;
      break;
    case "scourge": imageWeapon = imageScourge;
      break;
    case "sword": imageWeapon = imageSword;
      break;
    case "axe": imageWeapon = imageAxe;
      break;
    default:
      break;
  }

  const cardCss = `row no-gutters ${classes.card}`;
  return (
    <div className={cardCss}>
      <div className="col-6">
        <h4>{props.name}</h4>
        <Image src={imagePerso} alt="image du personnage" />
      </div>
      <div className="col-6">
        <div>Force: {props.strength}</div>
        <div>Agilité: {props.agility}</div>
        <div>Intelligence: {props.intelligence}</div>
        <Image src={imageWeapon} alt="arme" />
      </div>
    </div>
  );

};

export default Personnage;
