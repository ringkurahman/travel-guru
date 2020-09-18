import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../Icon/google.png';
import facebookIcon from '../../Icon/fb.png';
import './Login.css';
import { UserContext } from '../../App';
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFBLogIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './LoginManager';

function Login() {
  // State for new user
  const [newUser, setNewUser] = useState(false);
  // Multiple argument state
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    photo: '',
  });

  // Call firebase authentication function from LogInManager.js
  initializeLoginFramework();
  // Declare context API to pass user information
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // Call history API
  const history = useHistory();
  // Call state location API
  const location = useLocation();
  // Set state location and URL path for check whether user logged in or not and redirect to shipment page
  let { from } = location.state || { from: { pathname: '/rooms' } };

  // Google sign in event handler
  const googleSignIn = () => {
    // Import handleGoogleSignIn from LogInManager.js
    handleGoogleSignIn().then((res) => {
      // Call response handler from below function
      handleResponse(res, true);
    });
  };

  // Sign Out event handler
  const signOut = () => {
    // Import handleSignOut from LogInManager.js
    handleSignOut().then((res) => {
      // Call response handler from below function
      handleResponse(res, false);
    });
  };

  // Facebook sign in event handler
  const fbLogIn = () => {
    // Import handleFBLogIn from LogInManager.js
    handleFBLogIn().then((res) => {
      setUser(res);
      // Call response handler from below function
      handleResponse(res, true);
    });
  };

  // Create response function
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  // Catch event when field is blur
  const handleBlur = (e) => {
    let isFieldValid;
    if (e.target.name === 'name') {
      isFieldValid = e.target.value;
    }
    if (e.target.name === 'email') {
      // validation email
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      // validation 1 uppercase 1 lowercase 1 number
      isFieldValid = /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[0-9]){1})\S{6,20}$/.test(
        e.target.value
      );
    }
    if (isFieldValid) {
      // Copy previous declare object
      const newUserInfo = { ...user };
      // Set update values
      newUserInfo[e.target.name] = e.target.value;
      // call state
      setUser(newUserInfo);
    }
  };

  // Call onSubmit event handler
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          // Call response handler from below function
          handleResponse(res, true);
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        // Call response handler from below function
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='text-center'>
        <header className=''>
          <form onSubmit={handleSubmit}>
            <div className='form-field p-4'>
              <h4 className='text-left mb-5 ml-3'>
                {newUser ? 'Created an account' : 'login'}
              </h4>
              <p>
                {newUser && (
                  <input
                    className='mb-4'
                    onBlur={handleBlur}
                    type='text'
                    name='name'
                    placeholder='First Name'
                    required
                  />
                )}
              </p>
              <p>
                {newUser && (
                  <input
                    className='mb-4'
                    onBlur={handleBlur}
                    type='text'
                    name='name'
                    placeholder='Last Name'
                    required
                  />
                )}
              </p>
              <p>
                <input
                  className='mb-4'
                  onBlur={handleBlur}
                  type='email'
                  name='email'
                  placeholder='Username or Email'
                  required
                />
              </p>
              <p>
                <input
                  className='mb-4'
                  onBlur={handleBlur}
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                />
              </p>
              <p>
                {newUser && (
                  <input
                    className='mb-4'
                    onBlur={handleBlur}
                    type='password'
                    name='password'
                    placeholder='Confirm Password'
                    required
                  />
                )}
              </p>
              <p className='text-left mb-4'>
                <input type='checkbox' name='checkbox' />
                <span className='ml-3'>Remember Me</span>
                <span className='float-right'>
                  <Link>Forgot Password</Link>
                </span>
              </p>
              <input
                type='submit'
                value={newUser ? 'Create an account' : 'Login'}
              />
              <p>
                {!newUser && (
                  <div>
                    <span>Don't have an account?</span>
                    <span className='pl-1'>
                      <Link onClick={() => setNewUser(!newUser)}>
                        Create an account
                      </Link>
                    </span>
                  </div>
                )}
              </p>
              <p>
                {newUser && (
                  <div>
                    <span>Already have an account?</span>
                    <span className='pl-1'>
                      <Link onClick={() => setNewUser(!newUser)}>
                        Login
                      </Link>
                    </span>
                  </div>
                )}
              </p>
            </div>
          </form>
          <div>
            <p className='divider'></p>Or<p className='divider'></p>
          </div>
          <div className='mb-2 mt-3'>
            <button className='sign-btn' onClick={fbLogIn}>
              <img
                className='media-icon'
                src={facebookIcon}
                alt='google icon'
              />
              Continue with Facebook
            </button>
          </div>
          <div>
            <button className='sign-btn' onClick={googleSignIn}>
              <img className='media-icon' src={googleIcon} alt='google icon' />
              Continue with Google
            </button>
          </div>
          <p style={{ color: 'red' }}>{user.error}</p>
          {user.success && (
            <p style={{ color: 'green' }}>
              you have successfully{' '}
              {newUser ? 'created a new account' : 'logged in'}
            </p>
          )}
        </header>
      </div>
    </div>
  );
}

export default Login;
