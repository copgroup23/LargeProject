import React from 'react';
import {Form, Button} from 'react-bootstrap';

function ResetPassword()
{
    var loginUserName;
    var loginPassword;
    // const [message,setMessage] = useState('');

    const doResetPassword = event => 
    {
        event.preventDefault();
        alert("ResetPassword() called");

        //maybe???
        // html: "<a href=\"localhost:3000/EmailVerification/\">Verify Email</a>"

    };    


    return(
        <div>  
        <Form className="loginform">
            <h3 className="loginlabel">
                 Reset Your Password
            </h3>
            <Form.Group controlId="formBasicPassword">
                <Form.Control className="login-input" type="password" placeholder="password" ref={(c) => loginPassword = c}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control className="login-input" type="password" placeholder="Re-enter password" ref={(c) => loginPassword = c}/>
            </Form.Group>
            <Button size="lg" variant="primary" type="submit" onClick={doResetPassword} block>
                Verify
            </Button>
            {/* <span id="loginResult">{message}</span> */}
            <hr></hr>
        </Form>
    </div>
   );
};

export default ResetPassword;