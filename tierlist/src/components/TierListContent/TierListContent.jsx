import React, { useState, useRef } from "react";
import "./tierListContent.scss";
import circuitRoyalImg from "../../assets/circuit-royal.png";
import colloseoImg from "../../assets/colloseo.png";
import newQueenStreetImg from "../../assets/new-queen-street.png";

function TierListContent({ data, heroList }) {
    const [tiersList, setTiersList] = useState(data);
    const [heroesList, setHeroesList] = useState(heroList);

    const [dragging, setDragging] = useState(false);
    const [dragPanel, setDragPanel] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        if (!isNaN(+params)) {
            setDragPanel(true);
        }

        console.log("drag start..", params);
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener("dragend", handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0);
    };

    const handleDragEnter = (e, params) => {
        console.log("drag enter..");

        const currentItem = dragItem.current;

        if (dragPanel) {
            console.log("from drag panel", params, heroesList[currentItem]);

            setTiersList((oldList) => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.tierIndex].items.splice(
                    params.heroIndex,
                    0,
                    heroesList[currentItem]
                );
                dragItem.current = params;
                setDragPanel(false);
                return newList;
            });

            setHeroesList((current) =>
                current.filter((element) => {
                    return element !== heroesList[currentItem];
                })
            );
        } else if (e.target !== dragNode.current) {
            console.log("TARGET IS NOT THE SAME");
            setTiersList((oldList) => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.tierIndex].items.splice(
                    params.heroIndex,
                    0,
                    newList[currentItem.tierIndex].items.splice(
                        currentItem.heroIndex,
                        1
                    )[0]
                );
                dragItem.current = params;
                return newList;
            });
        }
    };

    const handleDragEnd = () => {
        console.log("drag end..");
        setDragging(false);
        setDragPanel(false);
        dragNode.current.removeEventListener("dragend", handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    };

    const getStyles = (params) => {
        const currentItem = dragItem.current;

        if (
            currentItem.tierIndex === params.tierIndex &&
            currentItem.heroIndex === params.heroIndex
        ) {
            return "current tierContent";
        }
        return "tierContent";
    };

    // header
    const [background, setBackground] = useState(circuitRoyalImg);
    const [options, setOptions] = useState("Choose Background");
    const [button, setButton] = useState(false);

    const changeBG = (e, bg, name) => {
        setBackground(bg);
        setOptions(name);
        setButton(false);
    };

    const openOptions = () => {
        setButton(true);
    };

    return (
        <div>
            <div className="header" id="header">
                <div className="title" id="title">
                    {" "}
                    My Overwatch 2 Tier List{" "}
                </div>
                <div className="dropdown" id="dropdown">
                    <div className="button__preview" onClick={openOptions}>
                        {options}
                    </div>
                    <div
                        className={
                            button
                                ? "dropdown__container active"
                                : "dropdown__container"
                        }
                    >
                        <div
                            value="circuit-royal"
                            className="dropdown-content"
                            onClick={(e) =>
                                changeBG(e, circuitRoyalImg, "Circuit Royal")
                            }
                        >
                            Circuit Royal
                        </div>
                        <div
                            value="colloseo"
                            className="dropdown-content"
                            onClick={(e) =>
                                changeBG(e, colloseoImg, "Colloseo")
                            }
                        >
                            Colloseo
                        </div>
                        <div
                            value="new-queen-street"
                            className="dropdown-content"
                            onClick={(e) =>
                                changeBG(
                                    e,
                                    newQueenStreetImg,
                                    "New Queen Street"
                                )
                            }
                        >
                            New Queen Street
                        </div>
                    </div>
                </div>
            </div>
            <div className="tierListContent">
                <div className="tierContainer" style={{backgroundImage: `url(${background})`}}>
                    {tiersList.map((tier, tierIndex) => (
                        <div
                            key={tier.name}
                            className="tiers"
                            onDragEnter={
                                dragging && !tier.items.length
                                    ? (e) =>
                                          handleDragEnter(e, {
                                              tierIndex,
                                              heroIndex: 0,
                                          })
                                    : null
                            }
                        >
                            <div className="tierHeader">{tier.title}</div>
                            <div className="tierContentWrapper">
                                {tier.items.map((hero, heroIndex) => (
                                    <div
                                        key={hero}
                                        className={
                                            dragging
                                                ? getStyles({
                                                      tierIndex,
                                                      heroIndex,
                                                  })
                                                : "tierContent"
                                        }
                                        draggable
                                        onDragStart={(e) => {
                                            handleDragStart(e, {
                                                tierIndex,
                                                heroIndex,
                                            });
                                        }}
                                        onDragEnter={(e) => {
                                            handleDragEnter(e, {
                                                tierIndex,
                                                heroIndex,
                                            });
                                        }}
                                    >
                                        <img src={hero} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="heroContainer">
                    <div className="heroWrapper">
                        {heroesList.map((item, itemIndex) => (
                            <div
                                className="hero"
                                draggable
                                onDragStart={(e) => {
                                    handleDragStart(e, itemIndex);
                                }}
                            >
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TierListContent;
