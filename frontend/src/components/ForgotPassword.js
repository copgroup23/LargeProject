import React from 'react';
import {Form, Button} from 'react-bootstrap';

function ForgotPassword()
{
    var email;
    // const [message,setMessage] = useState('');

    const doForgotPassword = event => 
    {
	    event.preventDefault();
        alert("Email: "+email.value+", doForgotPassword() called");

    };    


    return(
      <div>
          <Form className="loginform">
            <h3 className="loginlabel">Forgot Password</h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Control className="login-input" type="email" placeholder="Enter Your Email" ref={(c) => email = c}/>
            </Form.Group>
            
            <Button size="lg" variant="primary" type="submit" onClick={doForgotPassword} block>
                Done
            </Button>
            {/* <span id="loginResult">{message}</span> */}
            <hr></hr>
            <div>
                <a href="/">Back to Login</a>
            </div>
        </Form>
      </div>
   );
};

export default ForgotPassword;
