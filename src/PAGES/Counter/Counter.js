import React from 'react'
import { useState } from 'react'
import './Counter.css'

import Navbar from '../../component/Navbar/Navbar'



const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter-wrapper">
      <Navbar />
      <div className="counter">{counter}</div>
      <div className="button-wrapper">
        <button className="button" onClick={increment}>
          Increment +
        </button>
        <button className="button" onClick={decrement}>
          Decrement -
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;






















// const Counter = () => {
    
//     <Navbar/>
   
//     const [Counter, setCounter] = useState(0)
//     const Increment = () => {
//         setCounter(Counter +1)
//     }
    
//     const Decrement = () => {
//         setCounter(Counter -1)
//     }
//     const Reset = () => {
//         setCounter(0)
//     }

//   return (
//     <div>
//        <Navbar/>
//        <div> {Counter}</div> 
//        <button onClick={()=> Increment()} >Increment +</button>
//        <button onClick={()=> Decrement()} >Increment -</button>
//        <button onClick={()=> Reset()} >Reset</button>
//     </div>
//   )
// }

