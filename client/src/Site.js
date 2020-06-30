import React, { useState } from 'react';
import Admin from './admin/Admin'
import Login from './Login'



function Site() {
    const [user, setUser] = useState(1)
  return (
    <div className="">
        {user ===2 ? 
            <Login /> :  <Admin />
        }
     
        

        
    </div>
  );
}

export default Site;
