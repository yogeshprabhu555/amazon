import React from 'react'

import image from "../image/amazon pic.png"
import Taskone from './Taskone'

const Home = () => {
  return (
<>
<Taskone/>
<div className='box d-flex'>
    <div className='content'>
    <p className='welcome fs-3'>Welcome to Amazon.</p>
    <p className='change fs-2'>Change Your Mind To Became Success</p>
    <button className='btn btn-dark'>Join Now</button>
    </div>
    <img className='image' src={image} alt="" />
    
    </div>
    
</>

  )
}

export default Home