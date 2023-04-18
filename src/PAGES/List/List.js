import React, { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import './List.css';

const List = () => {
  const [List, setList] = useState([
    {
      id: 1,
      coursImportant: "React js ",
    },
    {
      id: 2,
      coursImportant: "HTML css",
    },
    {
      id: 3,
      coursImportant: "Vanilla javascript",
    },
  ]);

  return (
    <div className="list-container">
      <Navbar />
      <h1>List</h1>
      <ul>
        
    
      {List.map((cour, index) => (
         <li className="list-item" key={index}>{cour.coursImportant} 
         

         </li>
       
        
      ))}
      
      </ul>
    </div>
  );
};

export default List;
