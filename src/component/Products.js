import React from 'react'
import Taskone from './Taskone'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import face from "../image/71RH-ilpquL._SL1500_.jpg"
import Phone from "../image/mobile.jpg"
import tv from "../image/tv image.jpg"
import mixie from "../image/mixie.jpg"
const Products = () => {
  return (
    <>
    <Taskone/>
    <div className='seller' style={{display:"flex"}}>
   <p>All</p>
   <p>Amazon miniTV</p>
   <p>Sell</p>
   <p>Best sellers</p>
   <p>Mobiles</p>
   <p>Today's Deals</p>
   <p>Custmer Service</p>
   <p>New Releases</p>
   <p>Electronics</p>
   <p>Prime <span>prime day launches</span></p>
    </div>

    <div className='para'>
      <p>1-48 of over 100,000 results for <span>"products"</span></p>
    </div>
  <hr />
  <div style={{display:"flex"}}>
    <div>
  <p style={{fontWeight:"bold",marginLeft:"15px"}}>Delivery Day</p>
  <div style={{display:"flex"}}>
  <input style={{height:"4vh",width:"3vh",
   marginLeft:"5vh"}} type="checkbox"/>
   <p style={{marginLeft:"1vh",fontSize:"20px"}}>Get lt by Tomorrow</p>
   </div>
   <div style={{display:"flex"}}>
  <input style={{height:"4vh",width:"3vh",
   marginLeft:"5vh"}} type="checkbox"/>
   <p style={{marginLeft:"1vh",fontSize:"20px"}}>Get lt in 2 Days</p>
   </div>
   <div style={{marginLeft:"5vh"}}>
    <p style={{fontWeight:"bold",marginLeft:"5vh"}}>Category</p>
    <div style={{fontSize:"20px"}}>
    <p>Grocery & Gourmet Foods Snack Food</p>
    <p>Snack Foods</p>
    <p>Baby Care</p>
    <p>Health & Personal Care</p>
    <p>Health Care</p>
    <p>Face Care</p>
    <p>Hair Care</p>
    <p>Household Cleaning Supplies</p>
    </div>
   </div>
  </div>
 <h3 style={{marginLeft:"2vh"}}>Results</h3>
 <div>
  <img className='face' src={face} alt="" />
  <p>The Face Shop Chia Seed Hydro <br /> cream formulated with Vitamin <br /> B12 for Intense Hydration & glow <br /> |Korean Skin Care products Suitable <br /> for all skin type, 50ml
4.4 out of 5 stars 467 </p>
<p>⭐⭐⭐⭐⭐ 1,467</p>
<p style={{background:"rgb(239, 80, 6)",height:"5vh",width:"20vh",
color:"white",padding:"1vh"}}>Deal of the day</p>
<h1>₹1,949  <span style={{fontSize:"3vh"}}>(3,898/100 ml) <br />
M.R.P: ₹2,599 (25% off)
Save <br /> 5% more with Subscribe & Save</span></h1>
</div>

  <div style={{marginLeft:"2vh"}}>
  <img className='phone' src={Phone} alt="" />
  <p>Samsung Galaxy M14 5G (ICY Silver, 6GB,<br /> 128GB Storage) | 50MP Triple Cam | 6000<br /> mAh Battery | 5nm Octa-Core Processor<br /> | 12GB RAM with RAM Plus | Android 13 |<br /> Without Charger <br />   <br /> </p>
<p>⭐⭐⭐⭐⭐ 2,897</p>
<p style={{background:"rgb(239, 80, 6)",height:"5vh",width:"20vh",
color:"white",padding:"1vh"}}>Deal of the day</p>
<h1>₹14,990  <span style={{fontSize:"3vh"}}>(3,898/100 ml) <br />
M.R.P: ₹17,110 (35% off)
Save <br /> 8% more with Subscribe & Save <br /></span></h1>
  </div>


  <div style={{marginLeft:"2vh"}}>
  <img className='tv' src={tv} alt="" />
  <p>MI 125 cm (50 inches) X Series 4K Ultra,<br /> HD Smart Android LED TV L50M7-A2IN<br /> EMI starts at ₹1,672. No Cost EMI available<br /> EMI options<br />   <br /> </p>
<p>⭐⭐⭐⭐⭐ 27,688</p>
<p style={{background:"rgb(239, 80, 6)",height:"5vh",width:"20vh",
color:"white",padding:"1vh"}}>Deal of the day</p>
<h1>₹34,999  <span style={{fontSize:"3vh"}}>FREE delivery by<br /> Sat, 1 Jul, 7:00 AM - 9:00 PM<br />
M.R.P: ₹42,678 (20% off)Save
 <br /></span></h1> 
  </div>

  <div style={{marginLeft:"2vh"}}>
  <img className='mixie' src={mixie} alt="" />
  <p>Lifelong Power Pro LLMG02 Mixer Grinder,<br /> 500W,3 Jars 3 Jars (Liquidizing, Wet Grinding<br /> and Chutney Jar), Stainless Steel blades,<br /> 1 Year Warranty(White/Brown)<br />   <br /> </p>
<p>⭐⭐⭐⭐⭐ 17,288</p>
<p style={{background:"rgb(239, 80, 6)",height:"5vh",width:"20vh",
color:"white",padding:"1vh"}}>Deal of the day</p>
<h1>₹3,299  <span style={{fontSize:"3vh"}}>Visit the Butterfly Store<br /> EMI starts at ₹158. No Cost EMI <br /> <br /></span></h1>
  </div>
 
  </div>
  
    </>
  )
}

export default Products