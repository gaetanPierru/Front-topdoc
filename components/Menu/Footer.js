import Link from "next/link";
import React from "react";
import Styles from "../../styles/Footer.module.css"

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <Link href="/psyduck/condition">
        <p>Condition Generales</p>
      </Link>
      <Link href="/psyduck/donnee">
        <p>Données personnelles</p>
      </Link>
      <Link href="/psyduck">
        <p>Mentions légales</p>
      </Link>
    </div>
  );
}
