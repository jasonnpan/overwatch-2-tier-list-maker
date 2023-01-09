import React from 'react'
import './heroes.scss'
import Ana from '../../assets/Icon-Ana.webp'

function Heroes() {
  return (
    <div className="heroContainer">
        <div className="heroWrapper">
            <div className="hero" draggable='true'>
                <img src={Ana} alt="" />
            </div>
            <div className="hero"></div>
            <div className="hero"></div>
            <div className="hero"></div>
            <div className="hero"></div>
            <div className="hero"></div>
            <div className="hero"></div>
            <div className="hero"></div>
            <div className="hero"></div>
        </div>
    </div>
  )
}

export default Heroes