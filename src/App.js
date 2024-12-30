import './App.css'
import {Header} from './Components/Header'
import {Footer} from './Components/Footer'
import {AllRoutes} from './Routes/AllRoutes'
// import { useState } from 'react'

function App() {

  // const [cartItems,setcartItems] =useState()
  return (
    <div className="App">
      <Header  />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
