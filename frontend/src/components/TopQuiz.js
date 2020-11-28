import React from 'react';
import {Navbar, Nav, Figure, Modal, Button} from 'react-bootstrap';
import logo from '../images/clogo.png'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Leave Quiz
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to leave the quiz? Your answers will not be saved.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Return to Quiz</Button>
          <Button href="/home" variant="danger">Leave</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

function TopQuiz()
{
    const [modalShow, setModalShow] = React.useState(false);

    return(
      <div>
          <Navbar bg="light" expand="lg" className="topHomeTitle">
            <Navbar.Brand href="#home" className="topHomeTitle titleFont">
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
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <br></br>
                </Nav>
            </Navbar.Collapse> */}
            <Nav.Link className="col text-right red" onClick={() => setModalShow(true)}>Leave Quiz</Nav.Link>
            
            </Navbar>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <br></br>
      </div>
   );
};

export default TopQuiz;
