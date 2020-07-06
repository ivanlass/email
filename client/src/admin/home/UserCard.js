import React, { useContext, useState } from 'react';
import { RadniciContext } from "../../context/Radnici.context";
import Select from '../Select'
import './home.css'


function UserCard() {
  const [radnici, setRadnici] = useContext(RadniciContext)
  const [pickedProject, setPickedProject] =useState(null)

  const getPickedProject = e => {
    setPickedProject(e.target.value)
  }


  return (
    <div>
      {radnici.map(radnik => (
        <div className="user-card">
          <p>{radnik.username}</p>
          {/* <Select primatelji={true} selected={radnik.primatelji} /> */}
          <p>{radnik.affiID[0][pickedProject]}</p>
          <Select getPickedProject ={getPickedProject} primatelji={false} projekat={radnik.projekat} />
          <p>{radnik.poslao}</p>
          <button>Submit</button>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
