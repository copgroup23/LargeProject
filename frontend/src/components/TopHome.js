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
                    <div>Hi, {user.firstName} {user.lastName}</div>
                    <Nav.Link href="#profile">My Profile</Nav.Link>
                    <Nav.Link href="/home">Quizzes</Nav.Link>
                    <Nav.Link href="#link">Notes</Nav.Link>
                    <Nav.Link onClick={doLogout} className="red">Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <br></br>
      </div>
   );
};

export default TopHome;
