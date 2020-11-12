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
    
    const doHistory = async event => 
    {
	    event.preventDefault();


        var obj = {email:user.email};
        var js = JSON.stringify(obj);
            
        try {
            const response = await fetch('http://localhost:5000/api/getHistory',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
    
            var res = JSON.parse(await response.text());
            localStorage.setItem('history', JSON.stringify(res));
                
        }
        catch(e) {
            alert(e.toString());
            return;
        }
        window.location.href = '/History';

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
            {/* <div class="text-center">&nbsp;&nbsp;Hi, {user.firstName} {user.lastName}</div> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <br></br> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Nav.Link class="col text-center" href="#link">Study Material</Nav.Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Nav.Link class="col text-center" href="/home">Quizzes</Nav.Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Nav.Link class="col text-center" onClick={doHistory}>History</Nav.Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Nav.Link class="right" onClick={doLogout} className="red">Log Out</Nav.Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </Nav>
            </Navbar.Collapse>
            <div class="text-center">Hi, {user.firstName} {user.lastName}</div>
            
            </Navbar>
            <br></br>
      </div>
   );
};

export default TopHome;
