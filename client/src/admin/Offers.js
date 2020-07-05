import React, { useEffect, useContext, useState } from 'react';
import { OfferContext } from "../context/Offer.context";
import axios from 'axios';

function Offers() {
    const [offers, setOffers] = useContext(OfferContext)
    const [newOffer, setNewOffer] = useState('')

    const deleteOffer = e => {
        const data = {id: e.target.value}
        axios.delete(`http://localhost:5000/offer/delete`,{data})
        .then(res => setOffers(res.data))
    }

    const addNewOffer = e => {
        e.preventDefault()
        axios.post(`http://localhost:5000/offer/add`,{offer: newOffer})
        .then(res => setOffers(res.data))
    }


    return (
        <div className="">
            <form onSubmit={addNewOffer}>
                <input onChange={e => setNewOffer(e.target.value)} />
                <button>Dodaj novi offer</button>
            </form>
            {offers.map(offer => (
                <div key={offer._id}>
                <p>{offer.offer}</p>
                <button value={offer._id} onClick={deleteOffer}>BRISI</button>
                </div>
            ))}
        </div>
    );
}

export default Offers;
