import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar';
import './Toggle.css';
const Toggle = () => {
    const [Toggle, setToggle] = useState(false);
    
    const ActivToggle = () => {
      setToggle(!Toggle)
    }

   
  return (
    
    <div>
       <Navbar/>
      { Toggle === true &&
      <div className='btn'>Coucou </div>
      }
      <button onClick={()=> ActivToggle() } >Active Toogle</button>
    </div>
    
  )
}

export default Toggle