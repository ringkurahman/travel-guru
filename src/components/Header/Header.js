import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Image/Logo.png';
import DataCard from '../DataCard/DataCard';
import './Header.css';


const Header = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <header className='header-hero'>
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
                    {loggedInUser.email
                      ? loggedInUser.name.slice(0, 6)
                      : 'Login'}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-5 letter-spacing mt-5'>
              <h1 className='display-3 text-slanted font-weight-bolder text-white'>
                COX'S BAZAR
              </h1>
              <p className='text-light'>
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it...
              </p>
              <Link to='/' className='btn btn-warning btn-lg button-font mt-2'>
                <span className='ml-3 mr-2 text-dark font-weight-bold letter-spacing'>
                  Booking 🡲
                </span>
              </Link>
            </div>
            <div className='col-7 overflow-hidden'>
              <div className='d-flex justify-content-between'>
                <DataCard></DataCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
