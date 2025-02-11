import React from 'react'
import { Link } from 'react-router-dom'
import musicImage from "../assets/image/mediaplayer.gif"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import musicImg from "../assets/image/image3.webp"
import musicImg1 from "../assets/image/image1.webp"
import musicImg2 from "../assets/image/image2.png"
import "../index.css"

const Content = () => {
  return (
  
   <div className='container' style={{marginTop:"130px",alignItems:"center"}}>
      <div className="row">
      <div className="col-5">
        <h2>𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 <span style={{color:"#9c640c"}}>𝑴𝒆𝒅𝒊𝒂 𝑷𝒍𝒂𝒚𝒆𝒓</span></h2>
        <p style={{textAlign:"justify",letterSpacing:"1px"}}>
        𝐀 𝐦𝐞𝐝𝐢𝐚 𝐩𝐥𝐚𝐲𝐞𝐫 𝐢𝐬 𝐚 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐨𝐫 𝐝𝐞𝐯𝐢𝐜𝐞 𝐭𝐡𝐚𝐭 𝐩𝐥𝐚𝐲𝐬 𝐚𝐮𝐝𝐢𝐨, 𝐯𝐢𝐝𝐞𝐨, 𝐨𝐫 𝐨𝐭𝐡𝐞𝐫 𝐦𝐮𝐥𝐭𝐢𝐦𝐞𝐝𝐢𝐚 𝐟𝐢𝐥𝐞𝐬, 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐢𝐧𝐠 𝐯𝐚𝐫𝐢𝐨𝐮𝐬 𝐟𝐨𝐫𝐦𝐚𝐭𝐬 𝐚𝐧𝐝 𝐬𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 𝐜𝐚𝐩𝐚𝐛𝐢𝐥𝐢𝐭𝐢𝐞𝐬.𝐈𝐭 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐬 𝐯𝐚𝐫𝐢𝐨𝐮𝐬 𝐟𝐨𝐫𝐦𝐚𝐭𝐬 𝐥𝐢𝐤𝐞 𝐌𝐏𝟒, 𝐌𝐏𝟑, 𝐀𝐕𝐈, 𝐚𝐧𝐝 𝐜𝐚𝐧 𝐬𝐭𝐫𝐞𝐚𝐦 𝐜𝐨𝐧𝐭𝐞𝐧𝐭 𝐨𝐧𝐥𝐢𝐧𝐞.
        𝐒𝐨𝐦𝐞 𝐩𝐨𝐩𝐮𝐥𝐚𝐫 𝐦𝐞𝐝𝐢𝐚 𝐩𝐥𝐚𝐲𝐞𝐫𝐬 𝐢𝐧𝐜𝐥𝐮𝐝𝐞 𝐕𝐋𝐂, 𝐖𝐢𝐧𝐝𝐨𝐰𝐬 𝐌𝐞𝐝𝐢𝐚 𝐏𝐥𝐚𝐲𝐞𝐫, 𝐚𝐧𝐝 𝐐𝐮𝐢𝐜𝐤𝐓𝐢𝐦𝐞.
        </p>
      <Link to={"/home"} >
      <button style={{padding:"10px",border:"none",borderRadius:"10px", backgroundColor:"#9c640c"}}>Get Started</button>
      </Link>
      </div>
      <div className="col-1"></div>
      <div className="col-6" >
        <img src={musicImage} style={{width:"100%"}} alt="" />
      </div>
    </div>




   <div className="mainFeature mt-5">
    <h4 style={{textAlign:"center"}}>Features</h4>
   <div className="row mt-5">
      <div className="col-4">
      <Card style={{ width: '18rem' ,height:"28rem",backgroundColor:"black"}} className='card1'>
      <Card.Img variant="top" src={musicImg} />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
         Users can upload,view and remove the videos
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
      <div className="col-4">
      <Card style={{ width: '18rem' ,height:"28rem",backgroundColor:"black"}} className='card1'>
      <Card.Img variant="top" src={musicImg1} />
      <Card.Body>
        <Card.Title>  Categorise Videos</Card.Title>
        <Card.Text>
        Categorise Videos
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
      <div className="col-4">
      <Card style={{ width: '18rem' ,height:"28rem",backgroundColor:"black"}} className='card1'>
      <Card.Img variant="top" src={musicImg2} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
        Users can manage the watch history of all videos
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </div>
    </div>
   </div>

  <div className="row mt-5" style={{border:"1px solid",borderRadius:"10px",padding:"30px"}}>
    <div className="col-6 " >
      <h4>Simple powerfull and fast</h4>
      <p style={{textAlign:"justify",letterSpacing:"1px"}}> <span  style={{fontWeight:"bold"}}>Play everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium saepe excepturi nesciunt sequi iure maxime.</p>
  
      <p style={{textAlign:"justify",letterSpacing:"1px"}}><span  style={{fontWeight:"bold"}}>Play everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium saepe excepturi nesciunt sequi iure maxime.</p>
    
      <p style={{textAlign:"justify",letterSpacing:"1px"}}><span style={{fontWeight:"bold"}} >Play everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium saepe excepturi nesciunt sequi iure maxime.</p>
    </div>
    
    <div className="col-6">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AY3Yea6hBbI?si=4S2k23RcCoO4RQJh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>



   </div>
   






  )
}

export default Content
