import React from "react";
import classes from "./Weapons.module.scss";
import Weapon from "./Weapon/Weapon";
import sword from "../../../assets/armes/sword.png";
import bow from "../../../assets/armes/bow.png";
import scourge from "../../../assets/armes/scourge.png";
import axe from "../../../assets/armes/axe.png";

const Weapons = (props) => (
    <div className={classes.box}>
      {props.listWeapons.map(weapon => {
        let imgWeapon;
        switch(weapon) {
          case "sword" : imgWeapon = sword;
          break;
          case "bow" : imgWeapon = bow;
          break;
          case "scourge" : imgWeapon = scourge;
          break;
          case "axe" : imgWeapon = axe;
          break;
          default : imgWeapon = axe;
        }
        return <Weapon key={weapon} weapon={weapon} image={imgWeapon}/>
      })}
    </div>
);

export default Weapons;
