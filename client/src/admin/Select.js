import React, { useContext } from 'react';
import { OfferContext } from "../context/Offer.context";
import { PrimateljiContext } from "../context/Primatelji.context";

function Select(props) {
    const [primatelji, setPrimatelji] = useContext(PrimateljiContext)
    const [offers, setOffers] = useContext(OfferContext)
    return (

        <div>
            {props.primatelji ?
                <select onClick={props.getPrimatelji}>
                    {primatelji.map(primatelj => (
                        <option selected={props.selected === primatelj.listName ? true : false}>{primatelj.listName}</option>
                    ))}
                </select>
                : <select onClick={props.getPickedProject}>
                    {offers.map(offer => (
                        <option selected={props.projekat === offer.offer ? true : false}>{offer.offer}</option>
                    ))}
                </select>
            }

        </div>
    );
}

export default Select;
