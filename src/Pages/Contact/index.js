import React from 'react'
import './App.css'

function index() {
  return (
    <div id="contact" class="container contact">
      <h1>Contact Me</h1>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control inpt"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control inpt"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div class="mb-3">
          <label for="number" class="form-label">Mobile Number</label>
          <input
            type="number"
            class="form-control"
            id="number"
            placeholder="Enter Your Mobile Number"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          
          <textarea
            name=""
            id="message"
            cols="10"
            rows="10"
            class="form-control inpt"
            placeholder="How can we serve you"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-light">Submit</button>
      </form>
    </div>
  )
}

export default index