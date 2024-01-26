import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Image, Container } from "react-bootstrap";
import "./login.css";


import BackgroundImage from "../../Assets/img1.jpg";
import Logo from "../../Assets/login_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Home/NavBar";

function Login() {
  const Navigate=useNavigate();

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [Server_data, setServer_data] = useState([]);

  const [show, setShow] = useState(false);
  const [status,setStatus]=useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShow(false);
      setStatus('')
    },2000)
  },[show,status])

 
       //console.log("Server: ",Server_data);


    
 async function handleSubmit(event){
  event.preventDefault();
    setLoading(true);
    await delay(1000);
   //console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    setLoading(false);
    event.target.inputPassword.value='';
    event.target.inputName.value='';

    const sendData={
      name_email:inputUsername,
      password:inputPassword
    }
        
      axios.post('/log-in',sendData).then(async(res)=>{
           
       console.log(res.data)
    if(res.data.status==="failed"){
      setShow(true)
     
  
    }
    else{
      setStatus('Log In Successfully')
      await delay(1000)
      Navigate('/')
    }
          
        
        })


      

    
  };

 



  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

console.log(inputUsername,inputPassword);





  return (
    <>
      <NavBar/>
    <Container fluid={'xs'}>
  
    <div
      className="sign-in__wrapper"
      id="main" 
    >
    
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form method="post" className="shadow-lg p-4  bg-white rounded bg-opacity-75" onSubmit={handleSubmit}> 
        {/* Header */} 
        <img
          className="mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-0 text-center">Log In</div>
        {/* ALert */}

      
        {show ? 
          <p className="text-danger text-center fw-bold mb-0">
            Incorrect username or password!
          </p>
        : 
        <p id='//boxMoment' className="mb-0 text-success fw-bold text-center"><span id='boxMoment'>_</span>{status}</p>
        }

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username/Email</Form.Label>
          <Form.Control
            type="text"
          //  value={inputUsername}
            placeholder="Username"
          onChange={(e) => setInputUsername(e.target.value)}
            name="inputName"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2 " controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
       //     value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
           name="inputPassword"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="warning" type="submit" disabled>
            Logging In...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Link to='/forgot'
            className="px-0 pt-2"
            
           
          >
            Forgot password?
          </Link>
          <Link to='/sign_up'
            className="px-0 pt-2"
            
           
          >
            Create new account?
          </Link>
        </div>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Create by <b>T.Sutharsan</b> | &copy;2024
      </div>
    </div>
    </Container>
    </>
  );
};

export default Login;
