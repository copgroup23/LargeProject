import React from 'react';
import {Navbar, Nav, Figure} from 'react-bootstrap';
import logo from '../images/clogo.png'

function TopQuiz()
{

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
                </Nav>
            </Navbar.Collapse>
            <Nav.Link class="text-right red" href="/home">Leave Quiz</Nav.Link>
            
            </Navbar>
            <br></br>
      </div>
   );
};

export default TopQuiz;
