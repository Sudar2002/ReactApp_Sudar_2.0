import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
function EditModal(props) {


const ID=props.ID;
const Load=props.Func;

 const [userName,setUserName]=useState(props.user.name)
    const [userEmail,setUserEmail]=useState(props.user.email)
    const [userPass,setUserPass]=useState(props.user.password)

  const [show, setShow] = useState(true);
  const [editError, setEditError] = useState(false);
  const [change, setChange] = useState(false);
  const handleClose=()=>{
     setShow(false);
  }

   //const handleShow = () => setShow(true);




   function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

function Save(){
  console.log(userEmail)
  console.log(userName)
  console.log(userPass)
  const Email_ID={id:ID,email:userEmail};
  axios.post("/admin/edit",Email_ID).then(async(res)=>{
    console.log(res.data);

    if(res.data.status=='ok'){
      
      const EditUser={
        user_name:userName,
        user_email:userEmail,
        user_password:userPass
      }
      axios.put(`/admin/edit/update/${ID}`,EditUser).then(async(res)=>{
        console.log(res.data)
      if(res.data.status=='Update Successfully'){

      
        setChange(true)
        await delay(1000);
      Load();
        setChange(false);

        handleClose();
      }
      }).catch((err)=>{
        console.log(err.message)
      })
      
    
    }
    else{
    
      setEditError(true)
      await delay(2000);
      setUserEmail('');
      setEditError(false);
    }

  }).catch((err)=>{
    console.log(err.message)
  })
 
}


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
<Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {editError?<p className='text-center text-danger fw-bold '>This Email Already Use!</p>:change?<p className='text-center text-success fw-bold '>Save Changes Successfully</p>:<p className='opacity-0 mb-0 pb-0'>.</p>}
          <Form onSubmit={(event)=>{
            event.preventDefault()
            Save()
          }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter change user name"
                autoFocus
                autoComplete='off'
             value={userName}
             onChange={(event)=>{
              return setUserName(event.target.value)
            }}
             required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="New change user email"
                value={userEmail}
                required
                autoComplete='off'
                onChange={(event)=>{
                  return setUserEmail(event.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
             value={userPass}
             autoComplete='off'
             onChange={(event)=>{
              return setUserPass(event.target.value)
            }}
             required
              />
            </Form.Group>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" >
            Save Changes
          </Button>
         
        </Modal.Footer>
        </Form>
        </Modal.Body>
      </Modal>
      </Container>
    </>
  );
}

export default EditModal;