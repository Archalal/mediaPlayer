import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Footer = () => {
  return (
    <div>
      <div className="row p-3 m-5" >
        <div className="col-3" style={{textAlign:"justify"}}>
          <Link to={""}  style={{textDecoration:"none",color:"white"}} >
          <i className="fa-solid fa-music"  style={{fontSize:"22px"}}></i>
          <span style={{fontSize:"22px"}}>Media Player</span>
          </Link>
        
          <p style={{marginTop:"10px"}}>Desgined and built with all the love in the world by the team with the help of our contributors</p>
          <p>Code licensed ,docs CC BY 3.0</p>
          <p>Currently V5.3.2.0</p>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
        <h5>Links</h5>
          <Link  style={{textDecoration:"none" ,color:"white"}} to={""}><p>Landing page</p > </Link>
          <Link style={{textDecoration:"none" ,color:"white"}} to={""}><p>Home page</p></Link>
          <Link style={{textDecoration:"none" ,color:"white"}}to={""}><p>History page</p></Link>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
        <h5>Guides</h5>
          <Link to={""} style={{textDecoration:"none",color:"white"}}><p>React</p> </Link>
          <Link to={""} style={{textDecoration:"none" ,color:"white"}}><p>React Router</p></Link>
          <Link to={""} style={{textDecoration:"none" ,color:"white"}}><p>React Bootstrap </p></Link>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-3">
          <h5>Contact</h5>
          <InputGroup   >
        <Form.Control style={{fontSize:"13px"}}
          placeholder="Enter your email here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" style={{marginLeft:"5px"}}>
          Button
        </Button>
      </InputGroup>
      <div className="row" style={{marginTop:"10px"}}>
        <div className="col-2">
       <Link to=""> <i className="fa-brands fa-twitter"></i></Link>
        </div>
        <div className="col-2">
       <Link to={""}><i className="fa-brands fa-instagram"></i></Link>
       
        </div>
        <div className="col-2">
        <Link to={""}> <i className="fa-brands fa-facebook"></i></Link>
       
        </div>
        <div className="col-2">
        <Link to={""}> <i className="fa-brands fa-linkedin"></i></Link>
       
        </div>
        <div className="col-2">
        <Link to={""}><i className="fa-brands fa-github"></i></Link>
        
        </div>
        <div className="col-2">
        <Link to={""}> <i className="fa-solid fa-phone"></i></Link>
       
        </div>
      </div>
        </div>
        <p style={{textAlign:"center"}}>Copyright <span><i className="fa-regular fa-copyright"></i></span> July 2024 Batch Media Player App.built with React</p>
      </div>
    </div>
  )
}

export default Footer
