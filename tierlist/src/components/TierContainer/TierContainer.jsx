import React, { useState, useRef } from "react";
import "./tierContainer.scss";

function TierContainer({ data }) {
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log("drag starting..", params);
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener("dragend", handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0);
    };

    const handleDragEnter = (e, params) => {
        console.log("Entering drag..", params);

        const currentItem = dragItem.current;
        if (e.target !== dragNode.current) {
            console.log("TARGET IS NOT THE SAME");
            setList((oldList) => {
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
        console.log("Ending drag..");
        setDragging(false);
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

    return (
        <div className="tierContainer">
            <div className="drag-n-drop">
                {list.map((tier, tierIndex) => (
                    <div
                        key={tier.title}
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
                                    key={hero.id}
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
                                    onDragEnter={
                                        dragging
                                            ? (e) => {
                                                  handleDragEnter(e, {
                                                      tierIndex,
                                                      heroIndex,
                                                  });
                                              }
                                            : null
                                    }
                                >
                                    {hero}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TierContainer;
