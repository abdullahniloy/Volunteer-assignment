import React from 'react';
import {Button,Navbar,Nav,Link,Form,FormControl,Card,CardDeck} from 'react-bootstrap';
import './Home.css';
import logo from '../logos/Group 1329.png';
import img1 from '../../src/images/animalShelter.png';
import img2 from '../../src/images/babySit.png';
import img3 from '../../src/images/birdHouse.png';
import img4 from '../../src/images/childSupport.png';
import img5 from '../../src/images/cleanWater.png';
import img6 from '../../src/images/clearnPark.png';
import img7 from '../../src/images/clothSwap.png';
import img8 from '../../src/images/driveSafety.png';
import img9 from '../../src/images/libraryBooks.png';
import img10 from '../../src/images/foodCharity.png';
import img11 from '../../src/images/goodEducation.png';
import img12 from '../../src/images/ITHelp.png';
import img13 from '../../src/images/musicLessons.png';
import img14 from '../../src/images/newBooks.png';
import img15 from '../../src/images/refuseShelter.png';
import img16 from '../../src/images/riverClean.png';
import img17 from '../../src/images/schoolSuffiles.png';
import img18 from '../../src/images/studyGroup.png';
import img19 from '../../src/images/stuffedAnimals.png';
import img20 from '../../src/images/voteRegister.png';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container">
            <div> 
            <Navbar bg="light" variant="light">
            <img className="img" src={logo} alt=""/>
             <Nav className="mr-auto">
          </Nav>
             <Nav.Link href="/home" >Home</Nav.Link>
              <Nav.Link >Donation</Nav.Link>
              <Nav.Link >Events</Nav.Link>
              <Nav.Link >Blog</Nav.Link>
              <Button   variant="primary">Register</Button>
              <Button className="btn" variant="secondary">Admin</Button>
         </Navbar>
            </div>
            <br/>
            <div className = "search-bar"> 
                <h4>I GROW BY HELPING PEOPLE IN NEED.</h4>
                <input type="text" placeholder="Search..."/>
                <Button variant="primary" size="sm">
                 Submit
                 </Button>
            </div>

            {/* Body Part */}

            <div> 
                <br/>
                <br/>
                {/* 1st row */}
              <CardDeck>
                  <Card>
                    
                    <NavLink to="/register" activeClassName="selected">
                    <Card.Img variant="top" src={img1} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Enter a shelter animal.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img2} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                    BabySit during PTA meetings.
                    </Card.Text>
                    </Card.Body> 
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img3} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Build birdhouses for your navigators.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img4} />
            </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Child Support
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>
            {/* 2 row */}
            <br/>

            <div> 

            <CardDeck>
                  <Card>
                    <NavLink to="/register" activeClassName="selected">
                    <Card.Img variant="top" src={img5} />

                    </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Clean water for children.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
               
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img6} />
            </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Clean up your local park.
                    </Card.Text>
                    </Card.Body> 
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img7} />
            </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Host a clothing swap.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
               
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img8} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Give a seminar in driving safety.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>

            </div>
                
                 {/* 3 row */}
                <br/>

                <div> 
                <CardDeck>
                  <Card>
                   
                    <NavLink to="/register" activeClassName="selected">
                    <Card.Img variant="top" src={img9} />
                    </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Organize book at the library.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
               
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img10} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Food Charity.
                    </Card.Text>
                    </Card.Body> 
                </Card>
                <Card>
               
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img11} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Good education.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
               
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img12} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Give IT help to local adults.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>

                </div>
                <br/>
                {/* 4 row */}
                <div> 
                <CardDeck>
                  <Card> 
                    <NavLink to="/register" activeClassName="selected">
                    <Card.Img variant="top" src={img13} />          
                    </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Give free musics lessons. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img14} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                   New books for children.
                    </Card.Text>
                    </Card.Body> 
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img15} />
                    </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Refuge Shelter.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img16} />
                  </NavLink>
                    <Card.Body>
                    <Card.Text>
                   Host a river clean-up.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>

                </div>
                <br/>
                {/* 5 row */}
                <div> 
                <CardDeck>
                  <Card>
                   
                    <NavLink to="/register" activeClassName="selected">
                    <Card.Img variant="top" src={img17} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Collect school supplies
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img18} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Host a study group.
                    </Card.Text>
                    </Card.Body> 
                </Card>
                <Card>
               
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img19} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Collect stuffed.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                
                <NavLink to="/register" activeClassName="selected">
                <Card.Img variant="top" src={img20} />
                </NavLink>
                    <Card.Body>
                    <Card.Text>
                    Teach people how to register to vote.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
                </div>
                
             </div>
    );
};

export default Home;