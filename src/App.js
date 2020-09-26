import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import DestinationData from '../src/DestinationData/DestinationData'
import Book from './Components/Booking/Booking';
import Menu from './Components/Home/Menu';
import { CssBaseline } from '@material-ui/core';
import SignUp from './Components/Forms/SignUp';
import DestinationMap from './Components/Details/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  // declaring state for data
  const [destination, setDestination] = useState(DestinationData);
  // declaring state for sign in methods
  const [loggedInUser, setLoggedInUser] = useState([]);
  


  return (
    <div className='appBody'>
      <UserContext.Provider value={{ value1: [destination, setDestination], value2: [loggedInUser, setLoggedInUser] }}>
        <Router>
          <Menu />
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
              <Route exact path='/'>
                <Home />
              </Route>
                <Route path='/signUp'>
                  <SignUp />
                </Route>
                  <Route path='/book/:placeName'>
                    <Book />
                  </Route>
                      <PrivateRoute path='/destination'>
                        <DestinationMap />
                      </PrivateRoute>
                        <Route path='*'>
                          <NoMatch />
                        </Route>
              </Switch>
            </Router>
          <CssBaseline />
      </UserContext.Provider>
    </div>
  );
}

export default App;
