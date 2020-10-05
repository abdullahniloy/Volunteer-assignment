import React from 'react';
import {Button,Navbar,Nav,Link,Form,FormControl,Card,CardDeck} from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import img from '../../images/extraVolunteer.png';
import './Volunteer.css';
const Volunteer = () => {
    return (
        <div className = "container">
            <div> 
            <Navbar bg="light" variant="light">
            <img className="img" src={logo} alt=""/>
             <Nav className="mr-auto">
          </Nav>
             <Nav.Link href="/home" >Home</Nav.Link>
              <Nav.Link >Donation</Nav.Link>
              <Nav.Link >Events</Nav.Link>
              <Nav.Link >Blog</Nav.Link>
              <Nav.Link ><small>Abdullah</small></Nav.Link>
         </Navbar>

            </div>
            <br/>

            <div className="row"> 
            <div className="colum-md-6"> 
            <div className = "image1"> 

                <img src={img} alt=""/>
            </div>
            <div className="text"> 
            <h5>Humanity More</h5>
            <p>29 sep,2020</p>
            <br/>
            <br/>
            <Button variant="light"><small>Cancel</small></Button>
            
            </div>
            </div>

            <div className="colum-md-6">
            <div className = "image1"> 

                <img src={img} alt=""/>
            </div>
            <div className="text"> 
            <h5>Humanity More</h5>
            <p>29 sep,2020</p>
            <br/>
            <br/>
            <Button variant="light"><small>Cancel</small></Button>
            
            </div>


            </div>
            
            </div>

            <br/>

            <br/>

            <div className="row"> 
            <div  className="colum-md-6"> 
            <div className="bottom" className = "image1"> 

                <img src={img} alt=""/>
            </div>
            <div className="text"> 
            <h5>Humanity More</h5>
            <p>29 sep,2020</p>
            <br/>
            <br/>
            <Button variant="light"><small>Cancel</small></Button>
            
            </div>
            </div>

            <div className="colum-md-6">
            <div className = "image1"> 

                <img src={img} alt=""/>
            </div>
            <div className="text"> 
            <h5>Humanity More</h5>
            <p>29 sep,2020</p>
            <br/>
            <br/>
            <Button variant="light"><small>Cancel</small></Button>
            
            </div>


            </div>
            
            </div>

        </div>
    );
};

export default Volunteer;