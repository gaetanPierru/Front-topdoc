import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Styles from '../../styles/Planning/Calendrier.module.css'
export default function Calendrier() {
    async function getPlanning() {
        const data = await axios.get('http://localhost:5000/api/planningJour/1');
        console.log(data.data);
        setPlanning(data.data)
    }

    const [planning, setPlanning] = useState({})
    useEffect(() => {
        getPlanning()
    }, [])

    if (planning == null) {
        return <div>Loading</div>
    }

    return (<div className={Styles.scroll}>
        <table className={Styles.tab}>
            <thead><tr>
                <th colspan="20">Planning {planning.name}</th>
            </tr>
            </thead>
            <tbody className={Styles.ligne}>
                {planning.days?.map((day, index) => {

                    return <div key={index} className={Styles.colonne}>
                        <td >
                            <p>{day.jour}</p>
                        </td>
                        {day.crenaux?.map((creneau, number) => {
                            return <div key={number} >
                                <tr>
                                    <p>
                                        {creneau.heureDebut} {creneau.heureFin}
                                    </p>
                                </tr>
                            </div>
                        })}
                    </div>

                })}
            </tbody>
        </table>
    </div>
    )
}
