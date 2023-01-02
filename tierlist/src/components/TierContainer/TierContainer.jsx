import React from "react";
import "./tierContainer.scss";

function TierContainer() {
    return (
        <div id="board">
            <div className="row">
                <div className="label">S</div>
            </div>
            <div className="row">
                <div className="label">A</div>
            </div>
            <div className="row">
                <div className="label">B</div>
            </div>
            <div className="row">
                <div className="label">C</div>
            </div>
            <div className="row">
                <div className="label">D</div>
            </div>
        </div>
    );
}

export default TierContainer;
