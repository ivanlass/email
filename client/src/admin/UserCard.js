import React from 'react';
import './admin.css'



function UserCard() {
  return (
    <div className="user-card">
        <p>Marko</p>
        <select>
            <option>NO geo</option>
            <option> geo</option>
            <option>SE geo</option>
        </select>

        <select>
            <option>Advidi</option>
            <option>DEM</option>
            <option>Nova</option>
        </select>

        <p>010</p>
        <p>14000</p>
        <button>Submit</button>
    </div>
  );
}

export default UserCard;
