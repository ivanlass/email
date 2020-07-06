import React, { useContext } from 'react';
import { RadniciContext } from "../../context/Radnici.context";
import Select from '../Select'
import './home.css'


function UserCard() {
  const [radnici, setRadnici] = useContext(RadniciContext)
  console.log(radnici)


  return (
    <div>
      {radnici.map(radnik => (
        <div className="user-card">
          <p>{radnik.username}</p>
          {/* <Select primatelji={true} selected={radnik.primatelji} /> */}
          {/* <p>{radnik.affiID[0]}</p> */}
          {/* <Select primatelji={false} projekat={radnik.projekat} /> */}
          <p>{radnik.poslao}</p>
          <button>Submit</button>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
