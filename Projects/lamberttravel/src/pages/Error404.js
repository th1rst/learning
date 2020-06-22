import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

export default function Error404() {
    return (
        <div>
      <Navbar />

      <div className="home-background home-background-fullscreen">
        <div className="floating-box">
          <div className="floating-box-inner-row-1">
            <h1>ERROR 404</h1>
          </div>
          <div className="divider"></div>
          <div className="floating-box-inner-row-3">
            <h1>The requested page has not been found.</h1>
          </div>
          <Link to="/" className="rooms-link-box">
            Return to home
          </Link>
        </div>
      </div>
    </div>
    )
}