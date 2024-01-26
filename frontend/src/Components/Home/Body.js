
import React, { useState } from 'react'
import {Col, Container,Image, Row,Button }from 'react-bootstrap/esm';
import { Link } from 'react-router-dom';

function HomeBody() {
    const [show,setShow]  =useState(true);
   const [photo,setPhoto]=useState(false)
   const [rowValue,setRowValue]=useState('')
   const [morePhotos,setMorePhotos]=useState(false)

let Numbers=[];

for(let i=1;i<500;i++){

Numbers.push(i)

}
console.log(Numbers)


  return (
    <>
    <Container>

    <Row xs={2} sm={2} md={4} className='text-center'>
        <Col >
        <Link to='/Frontend' className='text-decoration-none'><div className='bg-light p-2 m-3 rounded shadow-lg' style={{width:150,height:150}}>
           <h5 className='text-primary fw-bold '>I Know Frontend</h5> 
           <hr className='m-1'/>
           <Image  fluid src={require('../../Assets/fullStack/img1.png')}  rounded style={{
            height:75
           }}></Image>
          
         
            
            </div></Link></Col>
        <Col >
        <Link to='/Backend' className='text-decoration-none'><div className='bg-light p-2 m-3   rounded shadow-lg' style={{width:150,height:150}}>
        <h5 className='text-success fw-bold'>I Know Backend</h5> 
        <hr className='m-1'/>
           <Image  fluid src={require('../../Assets/fullStack/img2.png')} className='ms-3' rounded style={{
            height:80
           
           }}></Image>
        </div></Link></Col>
        <Col>
        <Link to='/Database' className='text-decoration-none'><div className='bg-light p-2 m-3   rounded shadow-lg' style={{width:150,height:150}}>
        <h5 className='text-warning fw-bold'>I Know Database</h5> 
        <hr className='m-1'/>
           <Image  fluid src={require('../../Assets/fullStack/img3.png')}  rounded style={{
            width:75
           }}></Image>
           </div></Link></Col>

        <Col><Link to='/Cloud-server' className='text-decoration-none'><div className='bg-light p-2 m-3   rounded shadow-lg' style={{width:150,height:150}}>
        <h5 className='text-danger fw-bold'>I Know Cloud Server</h5> 
        <hr className='m-1'/>
           <Image  fluid src={require('../../Assets/fullStack/img4.png')}  rounded style={{
            height:80
           }}></Image>
           </div></Link></Col>
       
    </Row>
    

    

    
    </Container>

    {show?<div className='text-center'><Button variant="outline-info" onClick={()=>{
      return setShow(false),setPhoto(true)
    }}>Show Photos</Button></div>:<div className='text-center'><Button variant="outline-warning" onClick={()=>{
      return setShow(true),setPhoto(false)
   }}>Hide Photos</Button></div>}
    
    
  {photo && <Container fluid>
       <Row xs={2}>
  
  <Col  lg={3}><Image src={require('../../Assets/img1.jpg')} fluid rounded className='mt-2'></Image></Col>
  <Col lg={3}><Image src={require('../../Assets/img2.jpg')} fluid rounded className='mt-2'></Image>
</Col>
  <Col lg={3}><Image src={require('../../Assets/img3.jpg')} fluid rounded className='mt-2'></Image></Col>
  <Col lg={3}><Image src={require('../../Assets/img4.jpg')} fluid rounded className='mt-2'></Image></Col>
  <Col lg={3}><Image src={require('../../Assets/img5.jpg')} fluid rounded className='mt-2'></Image></Col>
  <Col lg={3}> <Image src={require('../../Assets/img6.jpg')} fluid rounded className='mt-2'></Image></Col>
  <Col lg={3}><Image src={require('../../Assets/img7.jpg')} fluid rounded className='mt-2'></Image></Col>
  <Col lg={3}><Image src={require('../../Assets/img8.jpg')} fluid rounded className='mt-2'></Image></Col>
 </Row> 

 <div className='text-center'>
 <input id='pass'  type='password' placeholder='Enter Admin Password' className='border-warning rounded m-4'/><button  className='btn btn-success btn-sm' onClick={()=>{
      const Pass=document.getElementById('pass').value;
     //   console.log('xyz',RowNum)
      if(Pass==2024){
        setMorePhotos(true)
      }

    document.getElementById('pass').value=''
 }} >Show More Photos</button>
</div>

{morePhotos &&
<>
<div className='text-center'>
 <input id='rowNum'  type='number'  className='border-primary rounded m-4'/><button  className='btn btn-info btn-sm' onClick={()=>{
      const RowNum=document.getElementById('rowNum').value;
     //   console.log('xyz',RowNum)
    setRowValue(RowNum);

    document.getElementById('rowNum').value=''
 }} >Submit</button>
</div>


  <Row xs={rowValue} lg={rowValue} md={rowValue} sm={rowValue} xl={rowValue} >
     
  { Numbers.map((num)=>{
    return(
        <Col lg={3}><Image src={require(`../../Assets/photos/img (${num}).jpg`)} fluid rounded className='mt-2'></Image></Col>
    )

  })}

      
</Row>
</>
}


</Container>}
</>
  )
}

export default HomeBody;