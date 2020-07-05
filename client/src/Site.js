import React, { useState } from 'react';
import Admin from './admin/Admin'
import Login from './Login'
import { OfferProvider } from "./context/Offer.context";
import { PrimateljiProvider } from "./context/Primatelji.context";
import { RadniciProvider } from "./context/Radnici.context";


function Site() {
  const [user, setUser] = useState(1)
  return (
    <div className="">
      <RadniciProvider>
        <PrimateljiProvider>
          <OfferProvider>
            {user === 2 ?
              <Login /> : <Admin />
            }

          </OfferProvider>
        </PrimateljiProvider>
      </RadniciProvider>

    </div>
  );
}

export default Site;
