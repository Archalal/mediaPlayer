import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  createCategory,
  deleteCategory,
  deleteVideo,
  getCategory,
  getSingleVideo,
  updateCategory,
} from "../services/allAPI";
import { data } from "react-router-dom";
import { Card } from "react-bootstrap";

const AllCategories = ({setDelVideoresponse}) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const [dataCategory, setDataCategory] = useState([]);
  const [vData, setVData] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryNameDisplay = async () => {
    if (categoryName) {
      try {
        const categoryDetails = { categoryName, allVideos: [] };
        await createCategory(categoryDetails);
        setShow(false);
        getAllCategory();
       
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("please fill");
    }
  };

  const getAllCategory = async () => {
    try {
      let response = await getCategory();
      // console.log(response.data);
      setDataCategory(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteCat = async (id) => {
    try {
      await deleteCategory(id);
      getAllCategory();
    } catch (err) {
      console.log(err);
    }
  };
  //
  const dropped = async (e, catData) => {
    let vId = e.dataTransfer.getData("videoDetails");
    // console.log(data);
    try {
      let response = await getSingleVideo(vId);
      // setVData(response.data)
      if (response.status >= 200 && response.status <= 300) {
        catData.allVideos.push(response.data);
        // console.log(catData);
        await updateCategory(catData.id, catData);
        getAllCategory();
       let resp= await deleteVideo(vId)
       setDelVideoresponse(resp)
        getAllCategory();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDragOverContent = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            All categories
          </span>
        </div>
        <div>
          {" "}
          <button
            style={{ width: "40px", height: "42px" }}
            onClick={handleShow}
            className="p-2 rounded-circle"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div></div>

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
                <Form.Control
                  onChange={(e) => setCategoryName(e.target.value)}
                  as="textarea"
                  placeholder="Category name"
                />
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
      {dataCategory.length > 0 ? (
        dataCategory.map((a, index) => (
          <div
            onDrop={(e) => dropped(e, a)}
            onDragOver={(e) => onDragOverContent(e)}
            key={index}
            style={{ minHeight: "200px" }}
            className="container-fluid border border-2  rounded  mt-3"
          >
            <div className="d-flex justify-content-between">
              <h5>{a.categoryName}</h5>
              <Button
                onClick={() => deleteCat(a.id)}
                variant="light"
                className="btn"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0",
                }}
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </Button>
            </div>
            <div className="row">
             {
              a.allVideos.map((b,index)=>(
                <div  key={index}className="col-6">
                <Card
                  // draggable={true}
                  // onDragStart={(e) => onVideoDrag(e, a.id)}
                  key={index}
                  style={{ width: "260px" }}
                >
                  <Card.Img
                    variant="top"
                    src={b.image}
                    // onClick={() => handleShow(a)}
                    style={{height:"200px",width:"100%"}}
                  />
                  <Card.Body>
                    {/* <h1>{index}</h1> */}
                    <div className="d-flex justify-content-between">
                      <Card.Title 
                      // onClick={() => handleShow(a)}
                      >
                        {b.caption}
                      </Card.Title>

                   
                    </div>
                  </Card.Body>
                </Card>
              </div>
              ))
             }
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3 style={{ color: "red" }}>NO category found</h3>
        </div>
      )}
    </div>
  );
};

export default AllCategories;
