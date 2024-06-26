import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='contain'>
        <div className='dsgn'>
          <div className='copy'>
            <span>&copy; 2013 - 2024 Signal, a 501c3 nonprofit.</span>
            <p>"Signal", Signal logos, and other trademarks are trademarks or registered trademarks of Signal Technology Foundation in the United States and other countries <a href='/brand/'>(more info here)</a>.</p>
            <p>For media inquiries, contact <a href='/mail/'>press@signal.org</a></p>
          </div>
          <div className='organisation'>
            <strong>Organisation</strong>
            <ul>
              <li><a href='/donate'>Donate</a></li>
              <li><a href='career'>Careers</a></li>
              <li><a href='blog'>Blog</a></li>
              <li>Brand Asstes</li>
              <li>Terms & Privacy Policy</li>
            </ul>
          </div>
          <div className='download'>
            <strong>Download</strong>
            <a href='/get'>
              <li>Android</li>
              <li>iPhone & iPad</li>
              <li>Windows</li>
              <li>Mac</li>
              <li>Linux</li>
            </a>
          </div>
          <div className='social'>
            <strong>Social</strong>
            <li><a href='https://github.com/'>GitHub</a></li>
            <li><a href='https://x.com/?lang=en'>Twitter</a></li>
            <li><a href='https://www.instagram.com/'>Instagram</a></li>
          </div>
          <div className='help'>
            <strong>Help</strong>
            <li><a href="/help">Support Center</a></li>
            <li><a href='https://community.signalusers.org/'>Community</a></li>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer