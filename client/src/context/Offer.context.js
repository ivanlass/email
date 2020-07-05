import React, { useState, createContext } from 'react'


export const OfferContext = createContext()


export const OfferProvider = (props) => {
    const [offers, setOffers] = useState([])
    return (
        <OfferContext.Provider value={[offers, setOffers]}>
            {props.children}
        </OfferContext.Provider>
    )
}