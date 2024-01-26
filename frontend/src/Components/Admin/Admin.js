import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './admin.css'
import EditModal from "./EditModal";
import NavBar from "../../Components/Home/NavBar"

export default function Admin(){
    const [users,setUsers]=useState([]);
    const [show,setShow]=useState('');
  const [id,setId]=useState('');
        const [editModal,setEditModal]=useState(false);

    const [userName,setUserName]=useState('')
    const [userEmail,setUserEmail]=useState('')
    const [userPass,setUserPass]=useState('')
    const [editID,setEditID]=useState('');
const Navigate=useNavigate();


async function Load(){  
  //  const Code={code:20021117};
    axios.get('/admin').then((res)=>{
        console.log(res.data)
               setUsers(res.data)
               if(!res.data[0]){
                setShow(false);
            }
            else{
                setShow(true);
            }

    });}

useEffect(()=>{
    Load();
},[])

// console.log(users)
// console.log(userPass)
 function Delete(id,user_name){
      const Sure= window.confirm(`Are sure delete ${user_name}?`)

console.log(Sure);

if(Sure){
       setId(id);
axios.delete(`/admin/delete/${id}`).then((res)=>{
            console.log(res.data);
      //  setTimeout(()=>{
            Load();
      //  },500)
        }).catch((err)=>{
            console.log(err.message);
        })

    }
    }
 
    //window.confirm("Hello!");
    
console.log(id)


    function Edit(ID,name,email,password){
        //console.log(ID)
        setEditID(ID)
            setEditModal(true);
            setUserName(name);
            setUserEmail(email);
            setUserPass(password);

    }
    function Edit2(ID,name,email,password){
        console.log(ID)
        
            setEditModal(false);
            setUserName(name);
            setUserEmail(email);
            setUserPass(password);
    }




    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }



    return(
      <>
        <NavBar/>
        <Container>
            <Row xs={12}>
            <Col>
            <h1 className="hstack justify-content-center text-warning text-center fw-bold text-decoration-underline my-3">SDR Admin Panel</h1>
            </Col>
            </Row>
        </Container>
        <Container>
        
        
        {editModal && <EditModal user={{name:userName,email:userEmail,password:userPass}} ID={editID} Func={Load} />}
        <Table striped bordered hover size="sm" responsive="sm" className="border-dark">
            <thead>
            
                <tr>
                
              
                <th className="text-dark fw-bold text-center bg-success">User ID</th>
                <th className="text-dark fw-bold text-center bg-success ">User Name</th>
                <th className="text-dark fw-bold text-center bg-success">User Email</th>
                <th className="text-dark fw-bold text-center bg-success">User Password</th>
                <th colSpan={2} className="text-dark fw-bold text-center bg-success">Custom Details</th>
                
                </tr>
                
            </thead>
            {show? 
            <tbody>
           
               {users.map((user,index)=>{
                return <tr key={index}>
                <td className="text-center">{user.user_id}</td>
                <td>{user.user_name}</td>
                <td>{user.user_email}</td>
                <td>{user.user_password}</td>

              {!editModal?  <td  className="text-center"><acronym title="Double Click Here!"> <button className="btn btn-primary btn-sm" onClick={()=>{
                    Edit(user.user_id,user.user_name,user.user_email,user.user_password)
                }}>Edit</button></acronym></td>
                :
                 <td  className="text-center"><acronym title="Double Click Here!"><button className="btn btn-primary btn-sm" onClick={()=>{
                    Edit2(user.user_id,user.user_email,user.user_name,user.user_password)
                }}>Edit</button></acronym></td>}

                <td className="text-center"><button className="btn  btn-danger btn-sm " onClick={()=>Delete(user.user_id,user.user_name)}>Delete</button></td>
                </tr>
                })}
            </tbody>:<tbody><tr><td colSpan={6} className="text-danger text-center">No Users Found!</td></tr></tbody>}
            </Table>

           
        </Container>
       
        </>
    )
}