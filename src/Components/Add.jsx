import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div className='mainContainer' >
        <div>
            <span style={{fontSize:"25px",fontWeight:"bold"}}>Upload New video</span>
            <button onClick={handleShow} className='p-2 rounded-circle ' style={{marginLeft:"10px"}}><i className="fa-solid fa-plus"></i></button>
    
        </div>
        <div>
        <Modal show={show} onHide={handleClose} size='md'>
        <Modal.Header closeButton>
          <Modal.Title>Uploading video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{border:"1px solid",padding:"12px",borderRadius:"10px"}}>


          <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      >
         <Form.Control type="text" placeholder="Video Caption" />
         </FloatingLabel>

         <FloatingLabel
        controlId="floatingInput"
        label="Video image url"
        className="mb-3"
      >
         <Form.Control type="url" placeholder="Video image url" />
         </FloatingLabel>

         
         <FloatingLabel
        controlId="floatingInput"
        label="Video youtube link"
        className="mb-3"
      >
         <Form.Control type="text" placeholder="Video youtube link" />
         </FloatingLabel>


          </div>
        </Modal.Body>
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
