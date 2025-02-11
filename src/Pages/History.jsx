import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

const History = () => {
  return (
    <div className='mainContainer'>
     <div className='d-flex justify-content-between px-5'>
         <div>
           <h5>Watch history</h5>
        </div>
        <div>
           <Link to={"/home"}>Back to Home</Link>
        </div>
      </div>

      <div style={{margin:'50px 0px'}}>
        

      <Table striped bordered hover className='px-5'>
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
      
        <tr>
          <td>1</td>
          <td>JS tutorial</td>
          <td>link</td>
          <td>time</td>
          <td><i className="fa-solid fa-trash text-danger" style={{cursor:'pointer'}}></i>
          </td>
        </tr>
       
      </tbody>
    </Table>
      </div>
    
    </div>
  )
}

export default History
