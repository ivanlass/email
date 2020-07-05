import React, { useContext } from 'react';
import './admin.css'
import { OfferContext } from "../context/Offer.context";
import { PrimateljiContext } from "../context/Primatelji.context";

function Select(props) {
    const [primatelji, setPrimatelji] = useContext(PrimateljiContext)
    const [offers, setOffers] = useContext(OfferContext)
    console.log(props.projekat)
    return (

        <div>
            {props.primatelji ?
                <select>
                    {primatelji.map(primatelj => (
                        <option value={props.selected === primatelj.listName ? true : false}>{primatelj.listName}</option>
                    ))}
                </select>
                : <select>
                    {offers.map(offer => (
                        <option selected={props.projekat === offer.offer ? true : false}>{offer.offer}</option>
                    ))}
                </select>
            }

        </div>
    );
}

export default Select;
