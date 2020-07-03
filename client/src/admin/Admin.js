import React from 'react';
import Navbar from './Navbar';
import { OfferContext, OfferProvider } from "../context/Offer.context";


function Admin() {
  return (
    <div className="">
      <OfferProvider>
        <Navbar />
      </OfferProvider>
    </div>
  );
}

export default Admin;
