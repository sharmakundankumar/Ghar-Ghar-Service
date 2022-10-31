import React from 'react'
import './App.css'
import ElecImg from '../../Images/Services/electrician.jpg'
import CCTVImg from '../../Images/Services/cctv.jpeg'
import TeliImg from '../../Images/Services/Tv.jpg'
import ACImg from '../../Images/Services/AC.jpg'
import PlumImg from '../../Images/Services/Plumb.jpg'

function index() {
  return (
    <div className='service container'>
      <h1>Our Services</h1>
      <div className="service-items">
        <div className="item">
          <img src={ElecImg}alt="" />
          <div>
            <h4>Electrician</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              itaque quasi blanditiis.
            </p>
          </div>
        </div>
        <div className="item">
          <img src={CCTVImg} alt="" />
          <div>
            <h4>Cctv Camera</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              itaque quasi blanditiis.
            </p>
          </div>
        </div>
        <div className="item">
          <img src={TeliImg} alt="" />
          <div>
            <h4>Television</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              itaque quasi blanditiis.
            </p>
          </div>
        </div>
        <div className="item">
          <img src={ACImg} alt="" />
          <div>
            <h4>Air Conditioner</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              itaque quasi blanditiis.
            </p>
          </div>
        </div>
        <div className="item">
          <img src={PlumImg} alt="" />
          <div>
            <h4>Plumbing</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              itaque quasi blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index