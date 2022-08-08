import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import './index.css';
import Footer from './Components/Footer'



const App = () => {
  return (
    <div>
<Navbar/>
         
         <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/services" component={Services}></Route>


         </Switch>

         <Footer/>
   


    </div>
  )
}

export default App