import React, { useEffect } from 'react';
import axios from 'axios';



function Offers() {
    useEffect(() => {
        axios.get(`http://localhost:5000/offer/`)
            .then(res => {
                console.log(res.data)
            })

    }, [])

    return (
        <div className="">
            offers
        </div>
    );
}

export default Offers;
