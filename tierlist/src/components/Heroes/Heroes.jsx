import React from 'react'
import './heroes.scss'
import HeroList from '../../assets'

function Heroes() {

  return (
    <div className="heroContainer">
        <div className="heroHeader">
            <p>Heroes</p>
        </div>
        <div className="heroWrapper">
            {
                HeroList.map((hero) => 
                <img className="hero" src={hero} alt='' />
                )
            }
        </div>
    </div>
  )
}

export default Heroes