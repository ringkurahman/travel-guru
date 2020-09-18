import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center header-hero'>
        <div className='col text-center'>
          <h1 className='text-light text-uppercase display-3 letter-spacing text-slanted'>
            404!
          </h1>
          <p className='text-light display-4'>
            Your choice does not match any hotel
          </p>
          <Link
            to='/'
            className='text-uppercase btn btn-secondary btn-lg mt-3'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Default;
