import React,{useState} from 'react';
import { Form, Button, Card, Modal, Alert } from 'react-bootstrap';

var password, confirmPass;

function AlertDismissibleExample(props) {
      return (
        <Alert {...props} variant="danger" >
          <p>
            Passwords don't match
          </p>
        </Alert>
      );
    
  }


var user_data = JSON.parse(localStorage.getItem('user_data'));

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
          <Button onClick={() => {
              pass(); 
              if(password.value !== confirmPass.value)
                {props.alertfunc(true);}}} variant="primary">Submit</Button>
        </Modal.Footer>
        {/* <script>if(password.value === confirmPass.value) props.alertfunc(false);</script> */}
        <AlertDismissibleExample
        show={props.alert}
        onHide={() => props.alertfunc(false)}
        ></AlertDismissibleExample>
      </Modal>
    );
  }
  
  const pass = async event =>
  {
    //   event.preventDefault();
      
      if((password.value === confirmPass.value) && password.value !== "")
      {
        var obj = {email:user_data.email, password: password.value};
        var js = JSON.stringify(obj);
        try
        {    
            const response = await fetch('http://localhost:5000/api/ResetPassword',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());
            window.location.href = '/profile';
            
        }
        catch(e)
        {
            alert(e.toString());
            return;
        } 
      }

      
  };

function Profile()
{
    
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);
    // const [message, setMessage] = React.useState('');
    // console.log(user_data);
    
    const doDelete = async event =>
    {
      event.preventDefault();
      
      var obj = {email:user_data.email};
        var js = JSON.stringify(obj);

        try {
            const response = await fetch('http://localhost:5000/api/deleteUser',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());


            // localStorage.setItem('questions', JSON.stringify(res));
            // localStorage.setItem('current', JSON.stringify(0));
            
            window.location.href = '/';
            
        }
        catch(e) {
            alert(e.toString());
            return;
        }

    };

    return(
    
        <div className="col text-center">
        
        <br></br>
        <Card className="profile-card">
            <Card.Body>
            <h3 className="col text-center">Personal Information</h3>
            <br></br>
            <div className="col text-center"><b>Name:</b> {user_data.firstName}&nbsp;{user_data.lastName}</div>
            <div className="col text-center"><b>Email:</b> {user_data.email}</div>
            <div className="col text-center"><b>User Name:</b> {user_data.userName}</div>
            </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <Button variant="primary" onClick={() => setModalShow(true)}>Update Password</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="danger" onClick={doDelete}>Delete Account</Button>
        
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {setModalShow(false); setShow(false)}}
        alert={show}
        alertfunc={setShow}
        />
        
        </div>
   );
};

export default Profile;
