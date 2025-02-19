import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { createCategory ,deleteCategory,getCategory} from '../services/allAPI';
import { data } from 'react-router-dom';



const AllCategories = () => {
  const [show, setShow] = useState(false);
  const[categoryName,setCategoryName]=useState("")

  const[dataCategory,setDataCategory]=useState([])

  useEffect(() => {
    getAllCategory();
    },[]);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryNameDisplay =async()=>{
    if(categoryName){
      try{
        const categoryDetails={categoryName,allVideos:[]}
        await createCategory(categoryDetails)
        setShow(false)
      }
      catch(err){
        console.log(err);
        
      }

    }
    else{
      alert("please fill")
    }
  }


  const getAllCategory=async()=>{
    try{
      let response= await getCategory()
      // console.log(response.data);
      
      setDataCategory(response.data)
     
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  const deleteCat=async(id)=>{
    try{
      await deleteCategory(id)
      getAllCategory()

    }
    catch(err){
      console.log(err);
      
    }
  }
  // 
  const dropped=(e,data)=>{
  console.log(e.dataTransfer.getData("videoDetails"));
  console.log(data);
  
  
}

const onDragOverContent=(e)=>{
  e.preventDefault();
}
  return (
    <div>
     <div className='d-flex justify-content-between'>
     <div> 
      <span style={{fontSize:"25px",fontWeight:"bold"}}>All categories</span>
      </div>
      <div> <button  style={{ width: "40px", height: "42px" }}  onClick={handleShow} className='p-2 rounded-circle' ><i className="fa-solid fa-plus"></i></button></div>
     <div>
     </div>
    
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>categories details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Category name"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} as="textarea" placeholder="Category name" />
      </FloatingLabel>
      </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={categoryNameDisplay}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
     </div>
    {
      dataCategory.length>0?
     dataCategory.map((a,index)=>(
      <div
      onDrop={(e)=>dropped(e,a)}
      onDragOver={e=>onDragOverContent(e)}
       key={index} 
       style={{minHeight:"200px"}}
       className='container-fluid border border-2  rounded  mt-3'>
      <div className='d-flex justify-content-between'>
        <h5>{a.categoryName}</h5>
        <Button  onClick={(()=>deleteCat(a.id))}  variant="light" className="btn" style={{backgroundColor:"transparent",border:"none",padding:"0"}} >
              <i className="fa-solid fa-trash text-danger" ></i>
            </Button>

      </div>

     </div>
     )):<div>
      <h3 style={{color:"red"}}>NO category found</h3>
     </div>
    }
    </div>
    
  )
}

export default AllCategories
