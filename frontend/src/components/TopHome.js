import React from 'react';
import {Navbar, Nav, Figure} from 'react-bootstrap';
import logo from '../images/clogo.png'

function TopHome()
{
    var user = JSON.parse(localStorage.getItem("user_data"));

    const doLogout = event => 
    {
	    event.preventDefault();

        localStorage.removeItem("user_data")
        window.location.href = '/';

    };    


    return(
      <div>
          <Navbar bg="light" expand="lg" className="topHomeTitle">
            <Navbar.Brand href="#home" className="topHomeTitle">
                Let's&nbsp;  
                <Figure className="imageAlign">
                    <Figure.Image
                    className="moveLogoTitle"
                    width={30}
                    height={30}
                    alt="<image>"
                    src={logo}
                    />
                </Figure>
                &nbsp;What You Know
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <br></br>
                    <Nav.Link class="col text-center" href="#profile">My Profile</Nav.Link>
                    <Nav.Link class="col text-center" href="/home">Quizzes</Nav.Link>
                    <Nav.Link class="col text-center" href="#link">Notes</Nav.Link>
                    <Nav.Link class="right" onClick={doLogout} className="red">Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div class="text-center">Hi, {user.firstName} {user.lastName}</div>
            </Navbar>
            <br></br>
      </div>
   );
};

export default TopHome;
