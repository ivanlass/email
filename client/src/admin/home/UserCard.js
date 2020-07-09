import React, { useState } from 'react';
import Select from '../Select'
import './home.css'


function UserCard(props) {
  const [pickedProject, setPickedProject] =useState(props.radnik.projekat)

  const [username, setUsername] = useState(props.radnik.username)

  const getPickedProject = e => {
    setPickedProject(e.target.value)
  }


  return (
    <div>

        <div className="user-card">
          <p>{props.radnik.affiID[0][pickedProject]}</p>
          <p>{props.radnik.username}</p>
          <Select primatelji={true} selected={props.radnik.primatelji} /> 
          <Select getPickedProject ={getPickedProject} primatelji={false} projekat={props.radnik.projekat} />
          <p>{props.radnik.poslao}</p>
          <button>Submit</button>
        </div>

    </div>
  );
}

export default UserCard;
