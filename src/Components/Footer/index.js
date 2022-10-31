import React from 'react'
import './App.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function index() {
  return (
    <div className='footer container'>
      <div className='up'>
        <div className="right">
          <p>All the rights &copy; reserved to ghargharbijli pvt. ltd.</p>
        </div>
        <div className="left">
          <FacebookRoundedIcon style={{ fontSize: 40, }}/>
          <InstagramIcon style={{ fontSize: 40, }}/>
          <TwitterIcon style={{ fontSize: 40, }}/>
          <LinkedInIcon style={{ fontSize: 40, }}/>
        </div>
      </div>
      <div className='down'>
        <p>
          This Website is Developed By Kundan Kumar Sharma
        </p>
      </div>
    </div>
  )
}

export default index