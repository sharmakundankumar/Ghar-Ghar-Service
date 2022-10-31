import React from 'react';
import './App.css';
import Logo from '../../Images/Icons/icon.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'



function Index() {
  return (
    <nav className="navbar navbar-expand-lg bg-light container">
  <div className="container-fluid">
    <img src={Logo} alt="Ghar Ghar Bijli"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link" aria-current="page" href="Home">Home</a>
        <a className="nav-link" href="Services">Services</a>
        <a className="nav-link" href="Team">Team</a>
        {/* <a className="nav-link" href="Blog">Blog</a> */}
        <a className="nav-link" href="Contact">Contact</a>
        <a className="nav-link" href="About">About</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Index