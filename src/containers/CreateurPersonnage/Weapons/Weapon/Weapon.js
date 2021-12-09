import React from "react";
import Image from "react-bootstrap/Image";
import classes from "./Weapon.module.scss";

const Weapon = (props) => {
  return(
    <div className={classes.align}>
      <Image src={props.image} className={classes.imgWeapon} onClick={props.selectWeapon}></Image>
      <div>{props.weapon}</div>
    </div>
  );
};

export default Weapon;
