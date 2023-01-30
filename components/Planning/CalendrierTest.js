import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiMenu } from "react-icons/bi";
import Styles from '../../styles/Planning/CalendrierTest.module.css'

export default function CalendrierTest() {

    async function getPlanning() {
        const data = await axios.get('http://localhost:5000/api/planningJour/23');
        console.log(data.data);
        setPlanning(data.data)
    }

    const [planning, setPlanning] = useState({})
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        getPlanning()
    }, [])

    if (planning == null) {
        return <div>Loading</div>
    }





    return (
        <>
            <div className={Styles.title}>
                <h2>
                    Choisissez votre rdv
                </h2>
                <BiMenu />
            </div>

            <div className={Styles.containerDay}>
                {planning.days?.map((day, index) => {
                    return <div >
                        <p>{day.jour.split(' ')[0]}</p>
                        <p className={ current == index? Styles.currentJour: Styles.jour} onClick={() => setCurrent(index)}>{day.jour.split(' ')[1]}</p>
                    </div>
                })}

            </div>

            {current != null && <div>
                <div className={Styles.container}>
                    <h3 className={Styles.h3}>Matin</h3>
                    <div className={Styles.MapHoraire}>
                        {planning.days[current].crenaux?.map((creneau) => {
                            console.log(parseInt(creneau.heureDebut.split(':')[0]))
                            if (parseInt(creneau.heureDebut.split(':')[0]) < 12) {
                                return <div className={Styles.creneau}>{creneau.heureDebut}</div>
                            }
                        })}

                    </div>

                </div>

                <div className={Styles.container}>

                    <h3 className={Styles.h3}>Aprem</h3>
                    <div className={Styles.MapHoraire}>
                        {planning.days[current].crenaux?.map((creneau) => {
                            console.log(parseInt(creneau.heureDebut.split(':')[0]))
                            if (((parseInt(creneau.heureDebut.split(':')[0]) >= 13) && (parseInt(creneau.heureDebut.split(':')[0]) < 16))) {
                                return <div className={Styles.creneau}>{creneau.heureDebut}</div>
                            }
                        })}

                    </div>
                </div>
                <div className={Styles.container}>

                    <h3 className={Styles.h3}>Soir</h3>
                    <div className={Styles.MapHoraire}>
                        {planning.days[current].crenaux?.map((creneau) => {
                            console.log(parseInt(creneau.heureDebut.split(':')[0]))
                            if (parseInt(creneau.heureDebut.split(':')[0]) >= 16) {
                                return <div className={Styles.creneau}>{creneau.heureDebut}</div>
                            }
                        })}

                    </div>
                </div>

            </div>}
        </>
    )
}







///