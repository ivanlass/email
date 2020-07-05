import React, { useState, useContext, useRef, createRef } from 'react'
import { OfferContext } from "../../context/Offer.context";

const AddUser = () => {
    const [offers, setOffers] = useContext(OfferContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('radnik')
    const [projekat, setProjekat] = useState('')
    const [poslao, setPoslao] = useState(0)
    const [mailoviZaSlanje, setMailoviZaSlanje] = useState(null)

    const IDs = {}
    offers.map(offer => IDs[offer.offer] = "")

    const addUser = e => {
        e.preventDefault()
        console.log("")
    }

    const addAffiID = e => {
        IDs[e.target.dataset.value] = e.target.value
        console.log(IDs)
    }
    return (
        <form onSubmit={addUser}>
            <input placeholder="Ime" onChange={e => setUsername(e.target.value)} />
            <input placeholder="password" onChange={e => setPassword(e.target.value)} />
            {offers.map(offer => (
                <input onChange={addAffiID} data-value={offer.offer} key={offer._id} placeholder={`${offer.offer} affi ID`} />
            ))}
            <input type="file" />
            <button type="submit">Dodaj radnika</button>
        </form>
    )
}

export default AddUser