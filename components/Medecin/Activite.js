import React from 'react'
import Styles from '../../styles/Medecin/Activite.module.css';
import Link from "next/link";

export default function Activite({ activity }) {
    console.log(activity);



    return (<Link href={`/planning?id=${activity.planning.id}`}>Liste des Activités
        <div className={Styles.activiteCard} >
            <div>Activite :</div>
            <p>{activity.fonction}</p>
            <p>{activity.description}</p>
        </div>
    </Link>
    )
}
