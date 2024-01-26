import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Image, Container } from "react-bootstrap";
import "./forgot.css";

import BackgroundImage from "../../Assets/img1.jpg";
import Logo from "../../Assets/login_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Home/NavBar";

function SignUp() {
  const Navigate = useNavigate();

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [Server_data, setServer_data] = useState([]);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const [status, setStatus] = useState("");
  const [status2, setStatus2] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [show_email, setShow_email] = useState(true);

 
  console.log("Server: ", Server_data);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },2000)
  // },[loading])

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    await delay(1000);
    setLoading(false);
    //console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    const pass1 = event.target.inputNewPassword.value;
    const pass2 = event.target.confirmPassword.value;
    // setInputPassword(event.target.inputPassword.value);
    // setInputUsername(event.target.inputName.value);
    const name=event.target.inputName.value;
    const email=event.target.inputEmail.value;
   // console.log(name,email,pass1,pass2);

    if (pass1 == pass2) {
      setInputPassword(pass1);
      setInputEmail(email);
      setInputName(name);
      
    } else {
      setShow3(true);
      event.target.inputNewPassword.value = "";
      event.target.confirmPassword.value = "";
  //    event.target.inputName.value="";
   //   event.target.inputEmail.value="";
      await delay(2500);
      setShow3(false);
    }


    if (pass1==pass2) {
      const NewAccountSend = 
               {
               user_name:name,
               user_email:email,
               user_password:pass1
               }
  
      axios.post(`/sign-up`, NewAccountSend)
        .then(async (response) => {
     //     console.log(response.data);
         // console.log(response.data.info);
  
     
     if(response.data.status==="failed"){
      setShow2(true)
      event.target.inputNewPassword.value = "";
      event.target.confirmPassword.value = "";
      event.target.inputEmail.value='';
      await delay(2000)
      setShow2(false)
     
  
    }
    else{
      setShow4(true)
      await delay(1000);
  
      Navigate('/log_in')
     }
          
        
        })
     
  
  
      //    await delay(2000);
      //   //  Navigate("/");
      //   })
      //   .catch((err) => {
      //     console.log(err.message);
      //   });
    }




  }
 

  console.log("New Pass", inputPassword);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  console.log(inputEmail);

//   useEffect(() => {
//     setTimeout(() => {
//       setShow(false);
//       setShow2(false);
     
//     }, 2500);
//   }, [show, show2, show4]);
console.log(status2)
  return (
    <>
    <NavBar/>
    <Container fluid={"xs"}>
      <div className="sign-in__wrapper" id="main">
        {/* Overlay */}
        <div className="sign-in__backdrop"></div>
        {/* Form */}

        <Form
          method="post"
          className="shadow-lg p-4 bg-white rounded bg-opacity-75"
          onSubmit={handleSubmit}
        >
          {/* Header */}
          <img className="mx-auto d-block mb-2" src={Logo} alt="logo" />
          <div className="h4 mb-0 text-center">Create New Account</div>
          {/* ALert */}

          <div>
            {show2 ? (
              <p className="text-danger text-center fw-bold mb-0">
               This Email Already Use!
              </p>
            ) : show3 ? (
              <p className="text-danger text-center fw-bold mb-0">
                Confirm Password Don't Match!
              </p>
            ) : show4 ? (
              <p className="text-success text-center fw-bold mb-0">
                Your Account Create Successfully {inputName}.
              </p>
            ) : (
              <p
                id="//boxMoment"
                className="mb-0 text-success fw-bold text-center"
              >
                <span id="boxMoment">_</span>
                {status}
              </p>
            )}

            <Form.Group className="mb-2 " controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                //     value={inputPassword}

                // onChange={(e) => setInputPassword(e.target.value)}
                name="inputName"
                placeholder="Enter Your Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-2 " controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                //     value={inputPassword}

                // onChange={(e) => setInputPassword(e.target.value)}
                name="inputEmail"
                placeholder="Enter Your Email"
                required
              />
            </Form.Group>


       


            <Form.Group className="mb-2" controlId="newPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                //  value={inputUsername}
                placeholder="Enter Password"
                // onChange={(e) => setInputUsername(e.target.value)}
                name="inputNewPassword"
                required
              />
            </Form.Group>
            <Form.Group className="mb-2 " controlId="password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                //     value={inputPassword}
                placeholder="Re-enter Password"
                // onChange={(e) => setInputPassword(e.target.value)}
                name="confirmPassword"
                required
              />
            </Form.Group>
            {/* <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group> */}
            {!loading ? (
              <Button className="w-100" variant="primary" type="submit">
                Submit
              </Button>
            ) : (
              <Button
                className="w-100"
                variant="warning"
                type="submit"
                disabled
              >
                Creating new account...
              </Button>
            )}
          </div>
          <div className="d-grid justify-content-end">
            <Link to="/log_in" className="px-0 pt-2">
              Log in?
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
}

export default SignUp;
