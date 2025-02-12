import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const Allvideo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <div>
      <h4>All video</h4>
      <div>

      <Card style={{ width: '18rem' }} onClick={handleShow}  >
      <Card.Img variant="top" src="https://images.filmibeat.com/img/2024/10/newproject-2024-10-31t112706-026-1730355136.jpg" />
      <Card.Body>
       <div className='d-flex justify-content-between'>

       <Card.Title>Card Title</Card.Title>
      
      <Button className='btn'>
        <i className="fa-solid fa-trash text-danger"></i></Button>
       </div>
      </Card.Body>
    </Card>

      </div>
      <div>
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <Modal.Header closeButton>
          <Modal.Title>VIDEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-dark p-3'>
          <iframe width="440" height="315" src="https://www.youtube.com/embed/AY3Yea6hBbI?si=i_e1-3BSDr5gF_id" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
     

      </div>
      
     
    </div>
    
  )
}

export default Allvideo
