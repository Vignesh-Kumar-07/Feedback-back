import React,{useEffect} from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'


function Aboutpage() {
  
  useEffect(()=>{
    return fetch('http://127.0.0.1:8000/api/accounts/')
            .then(res => console.log(res.json()))
            .then(data => console.log(data))
  },[])
  return (
    <Card>
        <div className='about'>
            <h1>About This Project</h1>
            <p>This is a React app to leave a feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <Link to='/'>Back To Home</Link>
        </div>
    </Card>
  )
}

export default Aboutpage