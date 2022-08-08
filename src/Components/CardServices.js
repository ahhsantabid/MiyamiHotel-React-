import React from 'react'

const CardServices = ({title,image,para,rate}) => {
  return (
    <>

        <div className="col-xs-12 col-sm-6 col-md-4 my-4">
        <div class="card" >
  <img src={image}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p><span>{para}</span></p>
    <p><span>{rate}</span></p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
        </div>

        </>
  )
}

export default CardServices
