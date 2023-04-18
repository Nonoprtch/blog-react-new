import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar';
import './Object.css';


const Object = () => {
    const [state, setState] = useState({
        id: 1,
        metier: "Fullstack Dev",
        Niveau: "en formation",

    });
    const handleJunior = () => {
        setState((prevstate)=> ({...prevstate, Niveau: "Junior"}))
    }
    const handleIntermediaire = () => {
        setState((prevstate)=> ({...prevstate, Niveau: "Intermediaire"}) )
    }
    const handleSenior = () => {
        setState((prevstate)=> ({...prevstate, Niveau: "Senior"}))
    } 
return (
    <div className='object-container'>
        <Navbar/>
        <h1>je suis {state.metier} {" "} {state.Niveau} </h1>
        <button onClick={() => handleJunior() } >dans trois mois je serais </button>
        <button onClick={() => handleIntermediaire() } >dans un an je serais </button>
        <button onClick={() => handleSenior() } >dans 5 ans je serais </button>
    </div>
  )
 };

export default Object