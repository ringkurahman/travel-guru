import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Default from './pages/Default/Default';
import Blog from './pages/Blog/Blog';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Destination from './pages/Destination/Destination';
import Login from './pages/Login/Login';
import Hotel from './pages/Hotel/Hotel';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <PrivateRoute path='/hotel'>
              <Hotel></Hotel>
            </PrivateRoute>
            <Route path='/destination/:title'>
              <Destination />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              <Default />
            </Route>
          </Switch>
        </main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
