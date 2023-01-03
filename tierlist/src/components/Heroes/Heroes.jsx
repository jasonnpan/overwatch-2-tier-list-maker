import React, { useState, useRef } from "react";
import "./heroes.scss";
import HeroList from "../../assets";

function Heroes() {


    return (
        <div className="heroContainer">
            <div className="heroHeader">
                <p>Heroes</p>
            </div>
            <div className="heroWrapper">
                {HeroList.map((hero, index) => (
                    <div className="hero" draggable>
                        <img src={hero} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Heroes;
