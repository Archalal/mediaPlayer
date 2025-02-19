import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getHistoryDetails,deleteHistory } from '../services/allAPI';

const History = () => {

  const[historyData,setHistoryData]=useState({})

  useEffect(()=>{
    getHistory();
  },[])


  const getHistory= async()=>{
    try{
      let apiResponse=await getHistoryDetails();
      // console.log(apiResponse.data);
      
      setHistoryData(apiResponse.data)
      // console.log(historyData);
      
      
    }
    catch(err){
      console.log(err);
      
    }


  }

  const deleteHist=async(id)=>{
   try{
    await deleteHistory(id)
    getHistory()

   }
   catch(err){
    console.log(err);
    

   }
  }



  return (
    <div>
     <div className='d-flex justify-content-between container mt-5'>
         <div>
           <h5>Watch history</h5>
        </div>
        <div>
           <Link to={"/home"}> <i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
        </div>
      </div>

      <div style={{margin:'50px 0px'}}>
        

      <Table striped bordered hover className='text-center container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Cpation</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
      
      {
       historyData.length>0?
       historyData.map((a,index)=>(
        <tr key={index}>
        <td>{index+1}</td>
        <td>{a.caption}</td>
        <td>
          <Link to={`https://www.youtube.com/watch?v=${a.videoURL}`}>
          `https://www.youtube.com/watch?v=${a.videoURL}`

          </Link>
        </td>
        <td>{a.formattedData}</td>
        <td> <button  onClick={()=>deleteHist(a.id)} className='btn'>
        <i className="fa-solid fa-trash text-danger" ></i>
        </button>
         
        </td>
      </tr>

      ) ):<>
      <div ><h5 style={{color:"red"}}>History page is empty</h5></div></>
      }
      </tbody>
    </Table>
      </div>
    
    </div>
  )
}

export default History
