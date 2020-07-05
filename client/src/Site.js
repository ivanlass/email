import React, { useState } from 'react';
import Admin from './admin/Admin'
import Login from './Login'
import { OfferProvider } from "./context/Offer.context";


function Site() {
    const [user, setUser] = useState(1)
  return (
    <div className="">
      <OfferProvider>
        {user === 2 ? 
            <Login /> :  <Admin />
        }
     
     </OfferProvider>

        
    </div>
  );
}

export default Site;
