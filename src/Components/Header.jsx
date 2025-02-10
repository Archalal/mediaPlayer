import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
       <Link to={"/"} style={{textDecoration:"none"}}>
       <Navbar className=" sticky-top" style={{backgroundColor:"black"}}>
        <Container>
          <Navbar.Brand style={{fontSize:"25px",paddingLeft:"5px",color:"#d68910",fontWeight:"10px"}}>
          <i className="fa-solid fa-music" style={{marginRight:"10px"}}></i>
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
       </Link>
      
    </div>
  )
}

export default Header
