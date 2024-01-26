import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Image, Container } from "react-bootstrap";
import "./forgot.css";


import BackgroundImage from "../../Assets/img1.jpg";
import Logo from "../../Assets/login_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Home/NavBar";

function Forgot() {
  const Navigate=useNavigate();

 const [inputEmail, setInputEmail] = useState([]);
  const [inputPassword, setInputPassword] = useState('');
  const [Server_data, setServer_data] = useState([]);

  const [show, setShow] = useState(false); 
  const [show2, setShow2] = useState(false); 
  const [show3, setShow3] = useState(false); 
  const [show4, setShow4] = useState(false);
  
  const [status,setStatus]=useState('');
  const [status2,setStatus2]=useState('');
  const [loading, setLoading] = useState(false);
  const [showPass,setShowPass]=useState(false);
  const [show_email,setShow_email]=useState(true);



//     useEffect(()=>{
//   axios.post('http://localhost:8000/forgot').then((res)=>{
//        const server_data= res.data;
//      setServer_data(server_data);
//     })
//     },[]);
//     console.log(Server_data);
async function sendEmail(event){
    event.preventDefault();
    setLoading(true);
    
    await delay(2000);
    setLoading(false);

    const jsonEmail={user_email:inputEmail};
   // console.log(jsonEmail);
   axios.post("/forgot",jsonEmail).then((response)=>{
   // console.log(response.data);
    setServer_data(response.data)
    if(response.data.status==='ok'){
      setShow_email(false)
      setShow2(true);
      setShowPass(true);



    }
    else{
        setShow(true);
        setInputEmail([]);

    }
    }).catch((err)=>{
      console.log(err.message);
    })
}

console.log('Server: ',Server_data)
  
// useEffect(()=>{
//   setTimeout(()=>{
//     setLoading(false)
//   },2000)
// },[loading])




 async function handleSubmit(event){
  event.preventDefault();
  setLoading(true);
  await delay(1000);
  setLoading(false);
   //console.log(`Username :${inputUsername}, Password :${inputPassword}`);
   const pass1=event.target.inputNewPassword.value;
   const pass2=event.target.confirmPassword.value;
    // setInputPassword(event.target.inputPassword.value);
    // setInputUsername(event.target.inputName.value);
    console.log(pass1,pass2);
    
    if(pass1==pass2){
      setInputPassword(pass1);
     

    }
    else{
      setShow3(true);
      event.target.inputNewPassword.value='';
      event.target.confirmPassword.value='';
    await delay(2500);
      setShow3(false);

    }
    
 
    
    
  };
if(inputPassword!==''){
  


const NewPassSendServer={
  new_pass:inputPassword

}

 axios.post(`/forgot/${Server_data.id}`,NewPassSendServer).then(async(response)=>{
    console.log(response.data.info);
      setStatus2(response.data.status);
      if (status2==='ok'){
     
        setShow4(true);
      
      }
      await delay(1000);
      Navigate('/');

  }).catch((err)=>{
    console.log(err.message);
  })

}

console.log("New Pass",inputPassword)

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }



console.log(inputEmail)

useEffect(()=>{
  setTimeout(()=>{
    setShow(false);
    setShow2(false);
    
  },2500)

},[show,show2,show4]);

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





      <Form method="post" className="shadow-lg p-4 bg-white rounded bg-opacity-75" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-0 text-center">Forgot Password</div>
        {/* ALert */}

      
        {show ? 
          <p className="text-danger text-center fw-bold mb-0">
            Please Enter Your Previous Account Email
          </p>
        : 
        <p id='//boxMoment' className="mb-0 text-success fw-bold text-center"><span id='boxMoment'>_</span>{status}</p>
        }       

 {show_email?<div> <Form.Group className="mb-2 " controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={inputEmail}
            onChange={(event)=>setInputEmail(event.target.value)}
       //     value={inputPassword}
            placeholder="Enter Your Previous Account Email"
           // onChange={(e) => setInputPassword(e.target.value)}
           name="email"
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="success" type="button" onClick={sendEmail}> 
            Send Confirmation
          </Button>
        ) : (
          <Button className="w-100" variant="warning" type="button" disabled>
            Verification Email...
          </Button>
        )}
     </div>  :<div> 
     {show2 ? 
          <p className="text-success text-center fw-bold mb-0">
             Your Email Verification Successfully
          </p>
        : show3?
        <p className="text-danger text-center fw-bold mb-0">
            Confirm Password Don't Match!
          </p>: show4?<p className="text-success text-center fw-bold mb-0">
            Password Update Successfully.
          </p>:
        <p id='//boxMoment' className="mb-0 text-success fw-bold text-center"><span id='boxMoment'>_</span>{status}</p>
        }  
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email" value={inputEmail} disabld
          /></div>}


  {showPass&&<div><Form.Group className="mb-2 " controlId="password">


          <Form.Label>Your Old Password</Form.Label>
          <Form.Control
            type="text"
       //     value={inputPassword}
           
           // onChange={(e) => setInputPassword(e.target.value)}
           name="oldPass"
           value={Server_data.old_pass}
            required disabled 
          />
        </Form.Group>

        {/* /// */}

        <Form.Group className="mb-2" controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
          //  value={inputUsername}
            placeholder="Enter New Password"
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
            Update Password
          </Button>
        ) : (
          <Button className="w-100" variant="warning" type="submit" disabled>
            Updating Password...
          </Button>
        )}
 </div>}
        <div className="d-grid justify-content-end">

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

export default Forgot;

