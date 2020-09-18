import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Image/Logo.png';
import './Navbar.css';

const Navbar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
      <div className='bg-dark'>
        <div className='container'>
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
                      {loggedInUser.email ? loggedInUser.name.slice(0, 6) : 'Login'}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
};

export default Navbar;
