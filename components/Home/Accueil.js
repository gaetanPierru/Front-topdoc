import Image from "next/image";
import React from "react";
import Styles from '../../styles/Accueil.module.css'
export default function Accueil() {
  return (
    <div>
      <div className={Styles.img}>
        <Image
          src="/leveinard.png"
          alt="une aide soignante"
          width={390}
          height={390}
          quality={100}
        />
      </div>
      <div className={Styles.text}>
        <h1>Bienvenue sur Topdoc</h1>
        <p>Le site de prise de rendez vous avec vos medecins</p>
        <p>Vous vous sentez a bout</p>
        <p>Prennez rendez vous!</p>
      </div>
    </div>
  );
}
