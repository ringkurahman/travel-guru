import React, { useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../Image/Logo.png';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import { useForm } from 'react-hook-form';
import {
  DateRangeInput,
  DateSingleInput,
  Datepicker,
} from '@datepicker-react/styled';
import 'react-datepicker/dist/react-datepicker.css';
import './Destination.css';


// Datepicker State
const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
};
// Datepicker function
function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return { ...state, focusedInput: action.payload };
    case 'dateChange':
      return action.payload;
    default:
      throw new Error();
  }
}

const Destination = () => {
  // React DatePicker state
  const [state, dispatch] = useReducer(reducer, initialState);

  // UseForm de-structure
  const { register, handleSubmit, watch, errors } = useForm();
  // Form submit event handler
  const onSubmit = (data) => {
    console.log(data);
  };

  // Call dynamic url title for exact match destination
  const { title } = useParams();
  const place = data.properties.find(
    (plc) => plc.title.toLowerCase() === title
  );

  // History API for change route
  const history = useHistory();
  // Event handlers for change route
  const handleProceedHotel = () => {
    history.push('/hotel');
  };

  return (
    <div className='header-hero'>
      <div className='container pt-3'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link to='/' className='navbar-brand'>
            <img className='brand-logo' src={logo} alt='logo' />
          </Link>
          <form class='form-inline my-2 my-lg-0 ml-5'>
            <input
              class='form-control mr-sm-2 search-form'
              autocomplete='on'
              type='search'
              placeholder='&#xf002; Search Your Destination...'
              aria-label='Search'
            ></input>
          </form>
          <div className='collapse navbar-collapse show ml-sm-5 justify-content-end'>
            <ul className='navbar-nav'>
              <li className='navbar-item active'>
                <Link
                  to='/news'
                  className='navbar-link text-white letter-spacing'
                >
                  News
                </Link>
                <Link
                  to='/destination'
                  className='navbar-link ml-md-5 ml-sm-2 text-white letter-spacing'
                >
                  Destination
                </Link>
                <Link
                  to='/blog'
                  className='navbar-link ml-5 text-white letter-spacing'
                >
                  Blog
                </Link>
                <Link
                  to='/contact'
                  className='navbar-link ml-5 text-white letter-spacing'
                >
                  Contact
                </Link>
                <Link
                  to='/login'
                  className='btn btn-warning btn-lg button-font ml-5'
                >
                  <span className='ml-2 mr-2 text-dark font-weight-bold letter-spacing'>
                    Login
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='row'>
          <div className='col-md-6 letter-spacing mt-5 pt-5'>
            <h1 className='display-3 text-slanted font-weight-bolder text-white'>
              {place.title}
            </h1>
            <p className='text-light letter-spacing'>{place.fullDesc}</p>
          </div>
          <div className='col-md-6 letter-spacing mt-5 pt-4'>
            <div className='mt-5'>
              <form
                className='ship-form booking-form bg-white p-3 border rounded'
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className='ml-1 label-text' htmlFor='origin'>
                  Origin
                </label>
                <input
                  name='address'
                  ref={register({ required: true })}
                  placeholder=''
                />
                {errors.address && (
                  <p className='error ml-1'>Origin is required</p>
                )}

                <label className='ml-1 label-text' htmlFor='destination'>
                  Destination
                </label>
                <input
                  className='mb-4'
                  name='address'
                  ref={register({ required: true })}
                  placeholder=''
                />
                {errors.address && (
                  <p className='error ml-1'>Destination is required</p>
                )}

                <DateRangeInput
                  onDatesChange={(data) =>
                    dispatch({ type: 'dateChange', payload: data })
                  }
                  onFocusChange={(focusedInput) =>
                    dispatch({ type: 'focusChange', payload: focusedInput })
                  }
                  startDate={state.startDate}
                  endDate={state.endDate}
                  focusedInput={state.focusedInput}
                />

                <button
                  onClick={handleProceedHotel}
                  className='bg-warning ml-1 mt-4 submit-button'
                >
                  Start Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
