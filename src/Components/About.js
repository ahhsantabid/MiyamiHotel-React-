import React from 'react'
import Data from './ApiDataAbout'
import Card from './Card'
const About = () => {
  return (
    <>

    <h2 className="about-title text-center text-info mb-5 mx-2 my-3">About <span>Grabd Bayon Hotel</span> </h2>

    <div className="container">
      <div className="row d-flex align-items-center my-3">
        <div className="col-xs-12 col-md-6 my-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste omnis modi obcaecati magnam vitae consectetur fuga qui exercitationem sed?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, magnam saepe. Eum, aut accusamus. Eveniet iure libero perferendis ab laboriosam ad fugiat minima reiciendis, voluptatibus modi eum a! Et, sunt.</p>

        </div>
        <div className="col-xs-12 col-md-6 my-3">
          <img src="https://images.pexels.com/photos/7820312/pexels-photo-7820312.jpeg?auto=compress&cs=tinysrgb&w=270" alt="" />
        </div>
      </div>
    </div>

    <h2 className="text-center text-info my-5 mt-5">Meet Our Team</h2>

    <div className="container">
  <div className="row ">

    {Data.map((values)=>{
      return(
        <>
        
        <Card  title={values.title} image={values.image} />

   

        </>
      )
    }
    )}

 
  </div>
</div>
    
    
    </>
  )
}

export default About