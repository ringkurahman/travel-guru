import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ property }) => {
  // De-structured properties value
  const { index, picture, title, _id } = property;
  return (
    <div>
      <Link to={`/destination/${title.toLowerCase()}`}>
        <div id={`card-${index}`} className='card text-left'>
          <img src={picture} alt='' />
          <h2 className='text-white'>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
