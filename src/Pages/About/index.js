import React from 'react'
import './App.css'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function index() {
  return (
    <div className="about container">
      <h1>About Us</h1>
      <div className="details">
        
        <h2>Contact</h2>
        <div className="serv">
        <div className='Box'>
        <div><PhoneAndroidIcon/> +919470028293</div>
        <div><EmailIcon/> ghargharbijli@gmail.com</div>
        
        <div><a href="https://www.facebook.com/profile.php?id=100086651784017">
        <FacebookRoundedIcon/>
        Facebook</a></div>
        <div><a href="https://www.instagram.com/gildedkundansharma/">
        <InstagramIcon/>
        Instagram</a></div>
        <div><a href="https://twitter.com/sharma0kundan">
        <TwitterIcon/>
        Twitter</a></div>
        <div><a href="https://www.linkedin.com/in/gilded-kundan-sharma-b899a820a/">
        <LinkedInIcon/>
        Linkedin</a></div>
      </div>
      </div>
        </div>
    </div>
      
    
  )
}

export default index