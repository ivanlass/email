import React, { useState } from 'react';
import Select from '../Select'
import './home.css'


function UserCard(props) {
  const [pickedProject, setPickedProject] = useState(props.radnik.projekat)
  const [primatelji, setPrimatelji] = useState(props.radnik.primatelji)


  const getPickedProject = e => {
    setPickedProject(e.target.value)
  }

  const getPrimatelji = e => {
    setPrimatelji(e.target.value)
  }

  const submitData = e => {
    e.preventDefault()
    console.log(e.target.dataset.id)
    console.log(primatelji)
    console.log(pickedProject)
  }

  return (
    <div>

      <div className="user-card">
        <p>{props.radnik.affiID[0][pickedProject]}</p>
        <p>{props.radnik.username}</p>
        <Select primatelji={true} selected={props.radnik.primatelji} getPrimatelji={getPrimatelji} />
        <Select getPickedProject={getPickedProject} primatelji={false} projekat={props.radnik.projekat} />
        <p>{props.radnik.poslao}</p>
        <button onClick={submitData} data-id={props.radnik._id}>Submit</button>
      </div>

    </div>
  );
}

export default UserCard;
