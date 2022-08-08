import React from 'react'
import Data from './ApiDataServices'
import CardServices from './CardServices'
const Services = () => {
  return (
    <div>
      <h2 className="text-center text-info my-3">Our Services</h2>
      <div className="container">
        <div className="row d-flex align-items-center my-4">
          <div className="col-xs-12 col-md-6">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ipsam est ducimus pariatur alias animi incidunt repellendus, cumque id fugiat.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatum, eaque quidem dolorum dolores repellendus saepe sapiente dignissimos!
            </p>

          </div>
          <div className="col-xs-12 col-md-6 my-4">
             <img src="https://images.pexels.com/photos/6466282/pexels-photo-6466282.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" />
            
            </div>



        </div>
      </div>

      <h2 className="text-center text-warning my-4">
        Look Our Services
      </h2>

      <div className="container">
  <div className="row ">

    {Data.map((values)=>{
      return(
        <>
        
        <CardServices  title={values.title} image={values.image} para={values.para} rate={values.rate} />

   

        </>
      )
    }
    )}

 
  </div>
</div>
    </div>
  )
}

export default Services
