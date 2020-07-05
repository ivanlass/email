import React, { useState, createContext } from 'react'


export const PrimateljiContext = createContext()


export const PrimateljiProvider = (props) => {
    const [primatelji, setPrimatelji] = useState([])
    return (
        <PrimateljiContext.Provider value={[primatelji, setPrimatelji]}>
            {props.children}
        </PrimateljiContext.Provider>
    )
}