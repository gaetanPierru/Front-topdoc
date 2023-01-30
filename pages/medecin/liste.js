import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Menu from "../../components/Menu/Menu";
import Activite from '../../components/Medecin/Activite';

export default function liste() {

    const [activite, setActivite] = useState([])

    async function getActivite() {
        const data = await axios.get(`${process.env.api}api/activite`)
        console.log(data.data);
        setActivite(data.data)
    }

    useEffect(() => {
        getActivite()
    }, [])

    if (Activite == null) {
        return <>
            <Menu />

            <div>Chargement</div>
        </>


    }


    return (<>
        <Menu />
        <div>liste des differents Activités</div>
        {activite?.map((activity, index) => {
            return <Activite key={index} activity={activity}/> 
        })}
    </>
    )
}
