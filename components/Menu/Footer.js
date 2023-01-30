import Link from "next/link";
import React from "react";
import Styles from "../../styles/Menu/Footer.module.css"

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <Link href="/relgle/condition">
        <p>Condition Generales</p>
      </Link>
      <Link href="/regle/donnee">
        <p>Données personnelles</p>
      </Link>
      <Link href="/regle">
        <p>Mentions légales</p>
      </Link>
    </div>
  );
}
