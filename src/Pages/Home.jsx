import React from 'react' 
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Allvideo from '../Components/Allvideo'
import AllCategories from '../Components/AllCategories'


const Home = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between py-5'>
        <div>
          <Add />
        </div>
        <div>
          <Link to={"/history"}>Watch history</Link>
        </div>
      </div>
    <div className="row">
      <div className="col-6">
        <Allvideo />
      </div>
      <div className="col-6">
        <AllCategories />
      </div>
    </div>
      
    </div>
  )
}

export default Home
