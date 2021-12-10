import React from "react";
import Image from "react-bootstrap/Image";
import classes from "./Weapon.module.scss";

const Weapon = (props) => {
  return(
    <Image src={props.image} className={classes.imgWeapon} onClick={props.selectWeapon}></Image>
  );
};

export default Weapon;
