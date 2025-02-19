import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
// import {uploadVideo} from '../services/allAPI';



const Add = ({setVideoResp}) => {

      const[video,setVideo]=useState({
        caption:"",
        image:"",
        videoURL:""
      })
      const[error,setError]=useState(false)
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
      
      
      const seperateYoutube=(values)=>{
        if(values.includes('.be/')){
          // console.log(values);
          
          const valueId=values.split('.be/')[1]
          setVideo({...video,videoURL:valueId})
          console.log(valueId);
          console.log(video.videoURL);
          
         setError(false)
          

        }else{

          console.error("invalid youtube link");
          setError(true)
          
        }
      
        
      }

      const fillSave=async()=>{
        if( video.caption && video.image && video.videoURL){
          // console.log("success");
        try{
          let response= await uploadVideo(video)
          setVideoResp(response)
          // console.log(response);
          
          if(response.status>=200 && response.status<=300){
            alert("successfully added your video")
            setShow(false)
            setVideo({
              caption:"",
              image:"",
              videoURL:""

            })
          }
          else{
            alert("something went wrong")
          }
        }
        catch{
          alert("an error occurred")
        }
          
        }else{
          alert("please fill the form")
          
        }
      }




    
  return (
    <div className='mainContainer' >
        <div>
            <span style={{fontSize:"25px",fontWeight:"bold"}}>Upload New video</span>
            <button   onClick={handleShow} className='p-2 rounded-circle ' style={{marginLeft:"10px"}}><i className="fa-solid fa-plus"></i></button>
    
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
         <Form.Control onChange={(e)=>{
                      setVideo({...video,caption:e.target.value})
         }}
         type="text" placeholder="Video Caption" />
         </FloatingLabel>

         <FloatingLabel
        controlId="floatingInput"
        label="Video image url"
        className="mb-3"
      >
         <Form.Control  onChange={(e)=>{setVideo({...video,image:e.target.value})}}
         type="text" placeholder="Video image url" />
         </FloatingLabel>

         
         <FloatingLabel
        controlId="floatingInput"
        label="Video youtube link"
        className="mb-3"
      >
         <Form.Control onChange={(e)=>seperateYoutube(e.target.value)}
          type="text" placeholder="Video youtube link" />
         </FloatingLabel>

         {
          error?
          <div>
            <p  style={{color:"red",textAlign:"center"}}>invalid youtube link</p>
          </div>:""}

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={fillSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      
    </div>
  )
}

export default Add
