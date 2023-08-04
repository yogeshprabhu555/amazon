import Taskone from './Taskone';


function Contacts() {
  return (
    <>
    <Taskone/>
<div style={{display:"flex",backgroundColor:"rgb(16, 20, 50",color:"white",
justifyContent:"space-evenly"}}>
  <div style={{height:"50vh",marginTop:"10vh"}}>
    <h3>Get to Know Us</h3>
    <p>About Us</p>
    <p>Careers</p>
    <p>Press Releases</p>
    <p>Amazon Science</p>
  </div>

  <div style={{marginTop:"10vh"}}>
    <h3>Connect with Us</h3>
    <p>Facebook</p>
    <p>Twitter</p>
    <p>Instagram</p>
  </div>

  <div style={{marginTop:"10vh"}}>
    <h3>Make Money with Us</h3>
    <p>Sell on Amazon</p>
    <p>Sell under Amazon Accelerator</p>
    <p>Protect and Build Your Brand</p>
    <p>Amazon Global Selling</p>
    <p>Become an Affiliate</p>
    <p>Fulfilment by Amazon</p>
    <p>Advertise Your Products</p>
    <p>Amazon Pay on Merchants</p>
   
  </div>
  <div style={{marginTop:"10vh"}}>
  <h3>Let Us Help You</h3>
  <p>COVID-19 and Amazon</p>
  <p>Your Account</p>
  <p>Returns Centre</p>
  <p>100% Purchase Protection</p>
  <p>Amazon App Download</p>
  <p>Help</p>
  </div>
</div>

<div style={{display:"flex",justifyContent:"center",backgroundColor:"black",
height:"13vh",color:"white"}}>
  <div style={{marginTop:"5vh"}}>
<h3>amazon</h3>
  </div>
  <div style={{marginTop:"6vh",marginLeft:"5vh"}}>
    <input style={{borderRadius:"1vh"}} type="number"placeholder='english' />
  </div>
  
</div>

<div style={{display:"flex",justifyContent:"center",justifyContent:"space-evenly",
backgroundColor:"black",color:"white",height:"20vh"}}>
<p>Australia</p>
<p>Brazil</p>
<p>Canada</p>
<p>China</p>
<p>France</p>
<p>Germany</p>
<p>Italy</p>
<p>Japan</p>
<p>Mexico</p>
<p>Netherlands</p>
<p>Poland</p>
<p>Singapore</p>
<p>Spain</p>
<p>Turkey</p>
<p>United Arab Emirates</p>
</div>


    </>
    
  );
}

export default Contacts;