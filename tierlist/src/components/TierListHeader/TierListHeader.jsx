import React, { useState } from "react";
import "./tierListHeader.scss";
import circuitRoyalImg from "../../assets/circuit-royal.png";
import colloseoImg from "../../assets/colloseo.png";
import newQueenStreetImg from "../../assets/new-queen-street.png";

function TierListHeader() {
    const [background, setBackground] = useState(circuitRoyalImg);
	const [options, setOptions] = useState("Choose Background");
	const [button, setButton] = useState(false);

    const changeBG = (e, bg, name) => {
        setBackground(bg);
		setOptions(name);
		setButton(false)
    };

	const openOptions = () => {
		setButton(true);
	};

    return (
        <div className="header" id="header">
            <div className="title" id="title">
                {" "}
                My Overwatch 2 Tier List{" "}
            </div>
            <div className="dropdown" id="dropdown">
                <div className="button__preview" onClick={openOptions}>{options}</div>
                <div className={button? "dropdown__container active": "dropdown__container"}>
                    <div
                        value="circuit-royal"
                        className="dropdown-content"
                        onClick={(e) => changeBG(e, circuitRoyalImg, "Circuit Royal")}
                    >
                        Circuit Royal
                    </div>
                    <div
                        value="colloseo"
                        className="dropdown-content"
                        onClick={(e) => changeBG(e, colloseoImg, "Colloseo")}
                    >
                        Colloseo
                    </div>
                    <div
                        value="new-queen-street"
                        className="dropdown-content"
                        onClick={(e) => changeBG(e, newQueenStreetImg, "New Queen Street")}
                    >
                        New Queen Street
                    </div>
                </div>
            </div>
            {/* <img src={background}></img> */}
        </div>
    );
}

export default TierListHeader;
