import React from 'react'
import "./Taskone.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
const Taskone = () => {
  return (

<>

<header>

  <nav className='navbar'style={{display:"flex"}}>
<p style={{color:"white",fontFamily:"fantasy",fontSize:"40px",marginLeft:"8vh"}}>amazon.
<span className='span fs-4'>in</span></p>
<input className='input' type="search" placeholder='Search items' />
<button className='search'>Seach</button>

<ul className='list px-5 fs-5'style={{display:"flex",}}>
  
  <Link to="/Home"><li>HOME</li></Link>
  <Link to="/Products"><li>PRODUCTS</li></Link>
  <Link to="/Events"><li>EVENTS</li></Link>
  <Link to="/Contacts"><li>CONTACTS</li></Link>
  
</ul>

<button className='button'>Sign Up</button>

  </nav>
</header>


</>
  )}

export default Taskone
