import React, { useState, useContext, useRef, createRef } from 'react'
import { OfferContext } from "../../context/Offer.context";
import { RadniciContext } from "../../context/Radnici.context";
import axios from 'axios';

const AddUser = () => {
    const [offers, setOffers] = useContext(OfferContext)
    const [radnici, setRadnici] = useContext(RadniciContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('radnik')
    const [projekat, setProjekat] = useState('')
    const [poslao, setPoslao] = useState(0)
    const [mailoviZaSlanje, setMailoviZaSlanje] = useState(null)
    const [primatelji, setPrimatelji] = useState("")

    const IDs = {}
    offers.map(offer => IDs[offer.offer] = "")

    const addUser = e => {
        e.preventDefault()
        const data = new FormData()
        data.append('username', username)
        data.append('password', password)
        data.append('role', role)
        data.append('projekat', projekat)
        data.append('poslao', poslao)
        data.append('file', mailoviZaSlanje)
        data.append('affiID', JSON.stringify(IDs))
        data.append('primatelji', primatelji)

        axios.post(`http://localhost:5000/users/add`, data)
        .then(res => {
            setRadnici(res.data)
            
        })
    }

    const addAffiID = e => {
        IDs[e.target.dataset.value] = e.target.value
    }
    return (
        <form onSubmit={addUser}>
            <input placeholder="Ime" onChange={e => setUsername(e.target.value)} />
            <input placeholder="password" onChange={e => setPassword(e.target.value)} />
            {offers.map(offer => (
                <input onChange={addAffiID} data-value={offer.offer} key={offer._id} placeholder={`${offer.offer} affi ID`} />
            ))}
            <input type="file" onChange={event => setMailoviZaSlanje(event.target.files[0])}/>
            <button type="submit">Dodaj radnika</button>
        </form>
    )
}

export default AddUser