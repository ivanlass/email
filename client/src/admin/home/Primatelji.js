import React, { useState, useContext } from 'react';
import { PrimateljiContext } from "../../context/Primatelji.context";
import axios from 'axios';

function Primatelji() {
    const [primatelji, setPrimatelji] = useContext(PrimateljiContext)
    const [newPrimatelji, setNewPrimatelji] = useState('')
    const [list, setList] = useState('')

    // const deletePrimatelji = e => {
    //     const data = { id: e.target.value }
    //     axios.delete(`http://localhost:5000/recievers/delete`, { data })
    //         .then(res => setOffers(res.data))
    // }

    const addNewPrimatelji = e => {
        e.preventDefault()
        const data = new FormData()
        data.append('listName', newPrimatelji)
        data.append('file', list)
        console.log(list)
        axios.post(`http://localhost:5000/recievers/add`, data)
            .then(res => {
                setPrimatelji(res.data)
                console.log(res.data)
                setNewPrimatelji('')
            })
    }

    return (
        <div className="">
            <form onSubmit={addNewPrimatelji} type="multipart/">
                <input value={newPrimatelji} onChange={e => setNewPrimatelji(e.target.value)} placeholder="drzava i ime liste" />
                <input type="file" onChange={event => setList(event.target.files[0])} />
                <button disabled={newPrimatelji === '' ? true : false}>Dodaj nove liste primatelja</button>
            </form>


            {primatelji.map(primatelji => (
                <div key={primatelji._id}>
                    <p>{primatelji.listName}</p>
                    <button value={primatelji._id} >BRISI</button>
                </div>
            ))}
        </div>
    );
}

export default Primatelji;
