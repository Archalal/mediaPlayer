import React, { useState } from 'react' 
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Allvideo from '../Components/Allvideo'
import AllCategories from '../Components/AllCategories'


const Home = () => {

  const[videoResponseLoad,setVideoResponseLoad]=useState("")
  const[delVideoresponse,setDelVideoresponse]=useState("")
  const[categorydeleteResponse,setcategorydeleteResponse]=useState("")
  return (
    <div className='container'>
      <div className='d-flex justify-content-between py-5'>
        <div>
          <Add setVideoResp={setVideoResponseLoad} />
        </div>
        <div>
          <Link to={"/history"}>Watch history</Link>
        </div>
      </div>
    <div className="row">
      <div className="col-6">
        <Allvideo  videosResp={videoResponseLoad} delVideoresponse={delVideoresponse} setcategorydeleteResponse={setcategorydeleteResponse} />
      </div>
      <div className="col-6">
        <AllCategories setDelVideoresponse={setDelVideoresponse} categorydeleteResponse={categorydeleteResponse} />
      </div>
    </div>
      
    </div>
  )
}

export default Home
