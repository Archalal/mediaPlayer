import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import {
  addHistory,
  deleteVideo,
  getAllVideo,
  uploadVideo,
  getSingleCategory,
  updateCategory,
} from "../services/allAPI";

const Allvideo = ({ videosResp, delVideoresponse, setcategorydeleteResponse }) => {
  useEffect(() => {
    getVideos();
  }, [videosResp, delVideoresponse]);

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleShow = async (video) => {
    const { caption, videoURL } = video;
    let currentDate = new Date();
    let formattedData = currentDate.toLocaleString("en-IN", { timeZoneName: "short" });
    const payLoad = { caption, videoURL, formattedData };
    try {
      await addHistory(payLoad);
    } catch (err) {
      console.log(err);
    }

    setSelectedVideo(video);
    setShow(true);
  };

  const getVideos = async () => {
    try {
      let apiResponse = await getAllVideo();
      setData(apiResponse.data);
    } catch {
      alert("something went wrong");
    }
  };

  const deleteVid = async (id) => {
    try {
      await deleteVideo(id);
      getVideos();
    } catch (err) {
      console.log(err);
    }
  };

  const onVideoDrag = (event, id) => {
    event.dataTransfer.setData("videoDetails", id);
  };

  const onDRagOverDiv = (e) => {
    e.preventDefault();
  };

  const onVideoDrop = async (e) => {
    let { categoryId, videoObj } = JSON.parse(e.dataTransfer.getData("fromCategoryVideo"));
    await uploadVideo(videoObj);
    getVideos();

    // Get category details
    let apiResponse = await getSingleCategory(categoryId);
    console.log(apiResponse.data, " category details");
    let currentAllvideos = apiResponse.data.allVideos;
    let sortedVideos = currentAllvideos.filter((item) => item.id != videoObj.id);

    const payload = {
      id: categoryId,
      categoryName: apiResponse.data.categoryName,
      allVideos: sortedVideos,
    };

    let deleteResponse = await updateCategory(categoryId, payload);
    setcategorydeleteResponse(deleteResponse);
    getVideos();
  };

  return (
    <div onDragOver={(e) => onDRagOverDiv(e)} onDrop={(e) => onVideoDrop(e)}>
      <h4>All video</h4>

      <div className="d-flex flex-wrap justify-content-center gap-2">
        {data.map((a, index) => (
          <Card
            draggable={true}
            onDragStart={(e) => onVideoDrag(e, a.id)}
            key={index}
            style={{ width: "15rem" }}
          >
            <Card.Img variant="top" src={a.image} onClick={() => handleShow(a)} />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title onClick={() => handleShow(a)}>{a.caption}</Card.Title>

                <Button
                  onClick={() => deleteVid(a.id)}
                  variant="light"
                  className="btn"
                  style={{ backgroundColor: "transparent", border: "none", padding: "0" }}
                >
                  <i className="fa-solid fa-trash text-danger"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div>
        {selectedVideo && (
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedVideo.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="border border-dark p-3 text-center">
                <iframe
                  width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoURL} &autoplay=1`}
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
      </div>
    </div>
  );
};

export default Allvideo;