import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div className='mainContainer' >
        <div>
            <span style={{fontSize:"25px",fontWeight:"bold"}}>Upload New video</span>
            <button className='p-2 rounded-circle ' style={{marginLeft:"10px"}}><i className="fa-solid fa-plus"></i></button>
    
        </div>
        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      
    </div>
  )
}

export default Add
