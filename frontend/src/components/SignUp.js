import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

function SignUp()
{
    var firstName;
    var lastName;
    var email;
    var userName;
    var password;

    const [message,setMessage] = useState('');

    const doSignUp = async event => 
    {
        event.preventDefault();

        var flag = 0;
        var error = [];

        if (firstName.value === "" || lastName.value === "" || email.value === "" || password.value === "") {
            flag = 1;
            error.push("Please fill out all fields\n");
        }

        if (flag === 1)
        {
            setMessage(error);
            return;
        }

        var obj = {firstname:firstName.value, lastname:lastName.value, email:email.value, login:userName.value, password:password.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch('http://localhost:5000/api/Register',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.error === "" )
            {
                setMessage("Account Created. \nCheck your email for verification link");
                setTimeout(() => {
                    window.location.href = '/';
                  },5000);
            }
            else
            {
                setMessage(res.error);
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };

    return(
    <div className>  
        <Form className="loginform">
            <h3 className="loginlabel">Create An Account</h3>
            <Form.Group controlId="formBasicFirst">
                <Form.Control className="login-input" type="fname" placeholder="First Name" ref={(c) => firstName = c}/>
            </Form.Group>
            <Form.Group controlId="formBasicLast">
                <Form.Control className="login-input" type="lname" placeholder="Last Name" ref={(c) => lastName = c}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmailAdr">
                <Form.Control className="login-input" type="emailadr" placeholder="Email" ref={(c) => email = c}/>
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
                <Form.Control className="login-input" type="username" placeholder="Username" ref={(c) => userName = c}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control className="login-input" type="password" placeholder="Password" ref={(c) => password = c}/>
            </Form.Group>
            <Button size="lg" variant="primary" type="submit" onClick={doSignUp} block>
                Sign Up
            </Button>
            <span id="loginResult">{message}</span>
            <hr></hr>
            <div>
                <a href="/">Back to Login</a>
            </div>
        </Form>
    </div>
    );
};

export default SignUp;
