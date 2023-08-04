import React from "react"
import "./App.css"
import Taskone from "./component/Taskone"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HOME from "./component/Home"
import Products from "./component/Products"
import Events from "./component/Events"
import Contacts from "./component/Contacts"
function App(){
  return(
    <>
{/* <Taskone/>   */}

<BrowserRouter>
<Routes>
<Route path="/" element={<Taskone/>}/>
<Route path ="/Home" element={<HOME spark/>}/>
<Route path ="/Products" element={<Products/>}/>
<Route path ="/Events" element={<Events/>}/>
<Route path ="/Contacts" element={<Contacts/>}/>


</Routes>
</BrowserRouter>

</>

  )
}
export default App