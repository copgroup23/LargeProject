import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function Login()
{
  var loginUserName;
  var loginPassword;

  const [message,setMessage] = useState('');

  const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {login:loginUserName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch('http://localhost:5000/api/login',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());
            if( res.firstName === "" )
            {
                setMessage('User/Password combination incorrect');
            }
            else if(!res.Validated)
            {
                setMessage('Check your email for verifying account');
            }
            else
            {
                var user = {email:res.Email,firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));
                
                setMessage('');
                window.location.href = '/home';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };


    return(
    <div>  
        <Form className="loginform">
            <h3 className="loginlabel">
                Log In
            </h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Control className="login-input" type="email" placeholder="username" ref={(c) => loginUserName = c}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control className="login-input" type="password" placeholder="password" ref={(c) => loginPassword = c}/>
            </Form.Group>
            <Button size="lg" variant="primary" type="submit" onClick={doLogin} block>
                Log in
            </Button>
            <span id="loginResult">{message}</span>
            <hr></hr>
            <div>
                <a href="/ForgotPassword">Forgot Password?</a>
                <span className="divider"></span>
                <a href="/SignUp" className="link">Create an account</a>
            </div>
        </Form>
    </div>
    );
};

export default Login;
