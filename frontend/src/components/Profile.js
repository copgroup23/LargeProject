import React,{useState} from 'react';
import { Form, Button, Card, Modal } from 'react-bootstrap';

var password, confirmPass;

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Update Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control className="login-input" type="password" placeholder="Enter new password" ref={(c) => password = c}/>
        <br></br>
        <Form.Control className="login-input" type="password" placeholder="Re-enter password" ref={(c) => confirmPass = c}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">Close</Button>
          <Button onClick={pass} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const pass = async event =>
  {
      event.preventDefault();
      
  };

function Profile()
{
    var user_data = JSON.parse(localStorage.getItem('user_data'));
    const [modalShow, setModalShow] = React.useState(false);

    

    return(
    
        <div className="col text-center">
        <br></br>
        <Card className="profile-card">
            <Card.Body>
            <h3 className="col text-center">Personal Information</h3>
            <br></br>
            <div className="col text-center">Name: {user_data.firstName}&nbsp;{user_data.lastName}</div>
            <div className="col text-center">Email: {user_data.email}</div>
            <div className="col text-center">User Name: {user_data.user}</div>
            </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <Button variant="primary" onClick={() => setModalShow(true)}>Update Password</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="danger">Delete User</Button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
   );
};

export default Profile;
