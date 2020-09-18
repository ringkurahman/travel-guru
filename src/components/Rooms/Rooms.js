import React from 'react';
import star from '../../Icon/star_1_.png';
import './Rooms.css';

const Rooms = (props) => {
  // De-structure properties
  const {
    id,
    src,
    title,
    size,
    facility,
    flexibility,
    ratings,
    price,
    total,
  } = props.item;

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-8 d-flex'>
          <div className='card col-md-6'>
            <img className='img-fluid' src={src} alt='' />
          </div>
          <div className='card col-md-6'>
            <div className='card-body'>
              <h5 className='card-text'>{title}</h5>
              <p className='text-muted'>{size}</p>
              <p className='text-muted'>{facility}</p>
              <p className='text-muted'>{flexibility}</p>
              <div className='d-flex justify-content-between'>
                <p>
                  <img className='star mb-1 mr-2' src={star} alt='' />
                  {ratings}
                </p>
                <p>${price}/night</p>
                <p className='text-muted'>${total}total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
