import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function VerifyEmail()
{
    var loginUserName;
    var loginPassword;
    const [message,setMessage] = useState('');

    const doVerifyEmail = async event => 
    {
	    event.preventDefault();

        var obj = {login:loginUserName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);
        
        try
        {    
            const response = await fetch('http://localhost:5000/api/verifyEmail',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());
            console.log(res);
            if( res.firstName === "" )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
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
            <span id="loginResult">{message}</span>
            <hr></hr>
        </Form>
    </div>
   );
};

export default VerifyEmail;
