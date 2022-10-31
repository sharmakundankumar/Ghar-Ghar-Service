import React from 'react'
import Logo from '../../Images/Icons/logo.png';
import './App.css'

function index() {
  return (
    <div className='home container'>
      <div className='main'>
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="right">
          <h1>Ghar Ghar Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            possimus blanditiis itaque vero totam suscipit eveniet mollitia,
            perferendis, nulla omnis voluptate exercitationem accusantium
            voluptates. At debitis deserunt ad modi iusto quam laboriosam
            architecto veritatis natus unde consequatur voluptate, maiores laborum
            incidunt, veniam quaerat eligendi ut non amet nobis ex delectus
            placeat accusamus alias! Dicta, dignissimos!
          </p>
        </div>
      </div>
      <div className='cardbox'>
        <h1>Our Top Plans</h1>
        <div className='cards'>
          <div className='card'>
            <h3>Plan No: 1</h3>
            <h6>Rs. 599</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              possimus blanditiis itaque vero totam suscipit eveniet mollitia,
              perferendis, nulla omnis voluptate exercitationem accusantium
              voluptates.
            </p>
          </div>
          <div className='card'>
            <h3>Plan No: 1</h3>
            <h6>Rs. 599</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              possimus blanditiis itaque vero totam suscipit eveniet mollitia,
              perferendis, nulla omnis voluptate exercitationem accusantium
              voluptates.
            </p>
          </div>
          <div className='card'>
            <h3>Plan No: 1</h3>
            <h6>Rs. 599</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              possimus blanditiis itaque vero totam suscipit eveniet mollitia,
              perferendis, nulla omnis voluptate exercitationem accusantium
              voluptates.
            </p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default index