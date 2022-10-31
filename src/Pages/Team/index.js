import React from 'react'
import './App.css'
import Abhishek from '../../Images/Team/abhishek.jpeg'
import Mukesh from '../../Images/Team/mukesh.jpeg'
import Ayush from '../../Images/Team/ayush.jpeg'


function index() {
  return (
    <div className="teams container">
      <h1>Our Team</h1>
      <div className="co-team">
        <h2>Our Special Team</h2>
        <div className="members">
          <div className="card">
            <img src={Abhishek} alt="" />
            <h4>Abhishek Kumar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              laudantium repudiandae quae natus tenetur fugit, fugiat eum
              voluptatibus itaque aspernatur harum excepturi repellendus?
            </p>
          </div>
          <div className="card">
            <img src={Mukesh} alt="" />
            <h4>Mukesh Kumar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              laudantium repudiandae quae natus tenetur fugit, fugiat eum
              voluptatibus itaque aspernatur harum excepturi repellendus?
            </p>
          </div>
          <div className="card">
            <img src={Ayush} alt="" />
            <h4>Ayush Kumar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              laudantium repudiandae quae natus tenetur fugit, fugiat eum
              voluptatibus itaque aspernatur harum excepturi repellendus?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index