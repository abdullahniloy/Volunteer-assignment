import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import Register from './Component/Register/Register';
import Volunteer from './Component/Volunteer/Volunteer';


function App() {
  return (
    <div className="App">
     
    <Router> 
      <Switch> 
        <Route path="/home"> 
        <Home></Home>
        </Route>

        <Route exact path = "/"> 
          <Home></Home>
         </Route>
         <Route path = "/register"> 
          <Register></Register>
         </Route>

         <Route path = "/volunteer"> 
         
         <Volunteer></Volunteer>
         
         </Route>

         

         <Route path = "*">
        <NoMatch></NoMatch>
         </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
