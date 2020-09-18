import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Rooms from '../../components/Rooms/Rooms';
import fakeData from '../../fakeData/allhotel';
import './Hotel.css';

const Hotel = () => {
  // State for map to load individual rooms
  const [hotel, setHotel] = useState(fakeData);

  return (
      <div>
          <Navbar></Navbar>
      {hotel.map((item) => (
        <Rooms item={item}></Rooms>
      ))}
    </div>
  );
};

export default Hotel;
