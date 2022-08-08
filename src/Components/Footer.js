import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div class="card text-center">
  
  <div class="card-body bg-dark text-light">
    <h5 class="card-title">Luxury is not a place, it's an experience</h5>
    <p class="card-text">A curation of authentic living palaces, landmark hotels, resorts and safaris, Grand Beyond is the hallmark of iconic hospitality across the globe. The brand is recognised for its warm and intuitive service and is the undisputed leader in Indian hospitality.</p>
    <p> <span> Address: House#125/A, plot#32/B, road#51, Mirpur-11, Dhaka 1216</span> </p>
          <p> <span> Mobile: 01856961465642, 015463315668, 012236600155 </span></p>
          <p> <span> Email: hotelgrandbeyond@gmail.com</span></p>

    <NavLink to="/"><button className='btn'>Take me Home page</button></NavLink>
  </div>
  <div class="card-footer text-muted">
    Copyright&2022; PoweredBy @ahhsanTabid
  </div>
</div>
    </div>
  )
}

export default Footer