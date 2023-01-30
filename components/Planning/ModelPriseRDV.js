import axios from 'axios'
import React from 'react'

export default function ModelPriseRDV({ planningId, userId, creneaux, setModal }) {


    async function priseRDV() {

        const rdv = {
            planningId: planningId,
            date_rendez_vous: creneaux,
            duree_rendez_vous: 30,
            UserId: userId
        }


        console.log("rdv avec la planning ", planningId, "et l'utilisateur ", userId, "pour l'heure : ", creneaux)

         const data = await axios.post(`${process.env.api}api/rdv`, rdv)

         console.log(data.data)
         setModal(false)
    }

    return (
        <>
            <div>
                ModelPriseRDV
            </div>


            <p>Prendre rendez vous avec le doc pour {creneaux.toString()}</p>
            <button onClick={priseRDV}>✔️</button><button onClick={() => setModal(false)}>❌</button>
        </>
    )
}
