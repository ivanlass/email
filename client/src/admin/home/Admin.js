import React, { useEffect, useContext } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import { OfferContext } from "../../context/Offer.context";
import { PrimateljiContext } from "../../context/Primatelji.context";
import { RadniciContext } from "../../context/Radnici.context";


function Admin() {
  const [offers, setOffers] = useContext(OfferContext)
  const [primatelji, setPrimatelji] = useContext(PrimateljiContext)
  const [radnici, setRadnici] = useContext(RadniciContext)

  useEffect(() => {
    axios.get(`http://localhost:5000/offer/`)
      .then(res => {
        setOffers(res.data)
      })

    axios.get(`http://localhost:5000/recievers/`)
      .then(res => {
        setPrimatelji(res.data)
      })

    axios.get(`http://localhost:5000/users/`)
      .then(res => {
        setRadnici(res.data)
      })

  }, [])

  return (
    <div className="">
      <Navbar />
    </div>
  );
}

export default Admin;
