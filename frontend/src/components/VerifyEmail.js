import React from 'react';
import {Form, Button} from 'react-bootstrap';

function VerifyEmail()
{
    var loginUserName;
    var loginPassword;
    // const [message,setMessage] = useState('');

    const doVerifyEmail = event => 
    {
	    event.preventDefault();
        alert("VerifyEmail() called");

        //maybe???
        // html: "<a href=\"localhost:3000/EmailVerification/\">Verify Email</a>"

    };    


    return(
        <div>  
        <Form className="loginform">
            <h3 className="loginlabel">
                Log in to Verify Email
            </h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Control className="login-input" type="email" placeholder="username" ref={(c) => loginUserName = c}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control className="login-input" type="password" placeholder="password" ref={(c) => loginPassword = c}/>
            </Form.Group>
            <Button size="lg" variant="primary" type="submit" onClick={doVerifyEmail} block>
                Verify
            </Button>
            {/* <span id="loginResult">{message}</span> */}
            <hr></hr>
        </Form>
    </div>
   );
};

export default VerifyEmail;
