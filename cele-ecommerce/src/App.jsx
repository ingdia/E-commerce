import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductsPage from './pages/ProductsPage'

import Footer from './components/Footer'

function App() {
const[mycart, setaddToCart] = useState([]);
function addMeToCart (product){
  const myCartItem = mycart.some((p)=> p.id === product.id) ;
  if(!myCartItem){
    let  myCartList = [...mycart, product]
         setaddToCart(myCartList)
     
        
    alert(`added ${product.name} added to cart`)
    console.log(product.name)//for the debug
    return myCartList
  }
  else
    alert("product already exist in cart list")

}

  return (
    <>
     <Router>
      <Navbar cartCount={mycart.length}/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/ProductsPage' element ={<ProductsPage  addMeToCart={addMeToCart}/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path= '/Contact' element ={<Contact/>}/>
      </Routes>
      <Footer/>

     </Router>
    </>
  )
}

export default App
