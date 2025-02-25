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
import { Card } from "react-bootstrap";

const AllCategories = ({ setDelVideoresponse, categorydeleteResponse }) => {
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    getAllCategory();
  }, [categorydeleteResponse]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseVideo = () => setShowVideo(false);

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
      alert("Please fill the category name");
    }
  };

  const getAllCategory = async () => {
    try {
      let response = await getCategory();
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

  const dropped = async (e, catData) => {
    let vId = e.dataTransfer.getData("videoDetails");
    try {
      let response = await getSingleVideo(vId);
      if (response.status >= 200 && response.status <= 300) {
        catData.allVideos.push(response.data);
        await updateCategory(catData.id, catData);
        getAllCategory();
        let resp = await deleteVideo(vId);
        setDelVideoresponse(resp);
        getAllCategory();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDragOverContent = (e) => {
    e.preventDefault();
  };

  const handleShowVideo = (video) => {
    setSelectedVideo(video);
    setShowVideo(true);
  };

  const handleDCategoryDrag = (e, categoryId, videoObj) => {
    console.log(videoObj, categoryId);

    let dataToTransfer = {
      categoryId,
      videoObj,
    };

    e.dataTransfer.setData("fromCategoryVideo", JSON.stringify(dataToTransfer));
    getAllCategory();
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
          <button
            style={{ width: "40px", height: "42px" }}
            onClick={handleShow}
            className="p-2 rounded-circle"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      {/* Modal for Adding Category */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea" label="Category name" className="mb-3">
            <Form.Control
              onChange={(e) => setCategoryName(e.target.value)}
              as="textarea"
              placeholder="Category name"
            />
          </FloatingLabel>
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

      {/* Modal for Displaying Video */}
      {selectedVideo && (
        <Modal show={showVideo} onHide={handleCloseVideo} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedVideo.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="border border-dark p-3 text-center">
              <iframe
                width="420"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideo.videoURL}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* Render Categories */}
      {dataCategory.length > 0 ? (
        dataCategory.map((a, index) => (
          <div
            onDrop={(e) => dropped(e, a)}
            onDragOver={(e) => onDragOverContent(e)}
            key={index}
            style={{ minHeight: "200px" }}
            className="container-fluid border border-2 rounded mt-3"
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
              {a.allVideos.map((b, index) => (
                <div
                  draggable={true}
                  onDragStart={(e) => handleDCategoryDrag(e, a.id, b)}
                  key={index}
                  className="col-6"
                >
                  <Card style={{ width: "260px" }}>
                    <Card.Img
                      variant="top"
                      src={b.image}
                      onClick={() => handleShowVideo(b)}
                      style={{ height: "200px", width: "100%" }}
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title onClick={() => handleShowVideo(b)}>
                          {b.caption}
                        </Card.Title>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3 style={{ color: "red" }}>No category found</h3>
        </div>
      )}
    </div>
  );
};

export default AllCategories;