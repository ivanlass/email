import React, { useState, createContext } from 'react'


export const RadniciContext = createContext()


export const RadniciProvider = (props) => {
    const [radnici, setRadnici] = useState([])
    return (
        <RadniciContext.Provider value={[radnici, setRadnici]}>
            {props.children}
        </RadniciContext.Provider>
    )
}