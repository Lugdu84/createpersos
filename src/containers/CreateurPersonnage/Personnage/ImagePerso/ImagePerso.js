import React from "react";
import ImagePlayer1 from "../../../../assets/persos/player1.png"
import ImagePlayer2 from "../../../../assets/persos/player2.png"
import ImagePlayer3 from "../../../../assets/persos/player3.png"
import Image from "react-bootstrap/Image";

const ImagePerso = (props) => {
  let imageToPrint = "";
  if (props.numImage === 1) imageToPrint = ImagePlayer1;
  else if (props.numImage === 2) imageToPrint = ImagePlayer2;
  else if (props.numImage === 3) imageToPrint = ImagePlayer3;

  return (
    <Image src={imageToPrint} alt="perso" />
  );
};

export default ImagePerso;
