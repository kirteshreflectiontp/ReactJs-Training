import React from 'react'
import Home from '../Home'
import './Homepage.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const Homepage = () => {
  return (
    <div>
     <BrowserRouter>
<Routes>
 <Route path="/" element={<Home/>} />
</Routes>
     </BrowserRouter>
    </div>
  )
}

export default Homepage;