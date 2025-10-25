import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductsPage from './pages/ProductsPage'

import Footer from './components/Footer'

function App() {


  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/ProductsPage' element ={<ProductsPage/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path= '/Contact' element ={<Contact/>}/>
      </Routes>
      <Footer/>

     </Router>
    </>
  )
}

export default App
