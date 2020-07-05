import React,{useEffect, useContext} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { OfferContext } from "../context/Offer.context";


function Admin() {
  const [offers, setOffers] = useContext(OfferContext)
  useEffect(() => {
    axios.get(`http://localhost:5000/offer/`)
        .then(res => {
            setOffers(res.data)
        })

}, [])

console.log(offers)
  return (
    <div className=""> 
        <Navbar />
    </div>
  );
}

export default Admin;
