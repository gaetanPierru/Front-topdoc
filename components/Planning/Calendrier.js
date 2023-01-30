import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Styles from '../../styles/Planning/Calendrier.module.css'
import ModelPriseRDV from './ModelPriseRDV';
export default function Calendrier({id}) {
    async function getPlanning() {
        const data = await axios.get(`${process.env.api}api/planningJour/${id}`);
        console.log(data.data);
        setPlanning(data.data)
    }

    const [planning, setPlanning] = useState({})
    const [modal, setModal] = useState(false)
    const [creneaux, setCreneaux] = useState({})

    useEffect(() => {
        getPlanning()
    }, [])

    if (planning == null) {
        return <div>Loading</div>
    }

    if(modal) {
        return <ModelPriseRDV planningId={23} userId={2} creneaux={creneaux} setModal={setModal}/>
    }

    return (<div className={Styles.scroll}>
        <table className={Styles.tab}>
            <thead>
                <tr>
                    <th colSpan="20">Planning {planning.name}</th>
                </tr>
            </thead>
            <tbody className={Styles.ligne}>
                {planning.days?.map((day, index) => {

                    return <div key={index} className={Styles.colonne}>
                        <td >
                            <p>{day.jour}</p>
                        </td>
                        {day.crenaux?.map((creneau, number) => {
                            return <div key={number}  className={Styles.crenaux}>   
                                <tr className={creneau.rdv ? Styles.nonDispo: Styles.dispo} onClick={(e) => { setCreneaux(new Date((new Date(day.jour + creneau.heureDebut)).setFullYear(new Date().getFullYear())));!creneau.rdv ? setModal(true): setModal(false); console.log(creneau)}  }>
                                    <p>
                                        {creneau.heureDebut.slice(0,-3)}
                                    </p>
                                    <p>
                                        {creneau.heureFin.slice(0,-3)}
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
