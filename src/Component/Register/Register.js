import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Register.css';

const Register = () => {
    return (
        <div className = "container">
           <div className = "logo"> 

            <img src={logo} alt=""/>

           </div>
            <br/>

           <div > 
           <form className = "form">
               <h4>Register as a volunteer</h4>
  <input className = "input1"type="text" name="search" placeholder="Full Name" />
  <br/>
  <input className = "input1" type="text" name="" id="" placeholder="Username or Email"/>
  <br/>
  <input className = "input1" type="text" name="" id="" placeholder="Date"/>
  <br/>
  <input className = "input1" type="text" name="" id="" placeholder="Description"/>
  <br/>
  <input className = "input1" type="text" name="" id="" placeholder="Organize Book at the library"/>
  <br/>
  <br/>
  
    <NavLink to="/volunteer" activeClassName="selected">
    <Button variant="primary" size="sm">
      Register
    </Button>
    </NavLink>
    </form>
           
           </div>
        </div>
    );
};

export default Register;
