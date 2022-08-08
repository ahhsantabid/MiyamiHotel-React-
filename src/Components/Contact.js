import React from 'react'

const Contact = () => {
  return (
    <>
    <h2 className="text-center text-info my-4">Contact Us</h2>

    <div className="container my-5">
  
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="input" class="form-control mb-4" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control mb-4" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile</label>
  <input type="input" class="form-control mb-4" id="exampleFormControlInput1" placeholder="+8801#########"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control mb-4" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button className='btn btn-primary'>Submit feedback</button>
    </div>


    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-xs-12 col-md-6">
          <p> <span> Address: House#125/A, plot#32/B, road#51, Mirpur-11, Dhaka 1216</span> </p>
          <p> <span> Mobile: 01856961465642, 015463315668, 012236600155 </span></p>
          <p> <span> Email: hotelgrandbeyond@gmail.com</span></p>

        </div>
        <div className=" col-xs-12 col-md-6 my-4">
          <img src="./map3.png" alt="" />
        </div>
        
      </div>
    </div>
    
    
    </>
  )
}

export default Contact

