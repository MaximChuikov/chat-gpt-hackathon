import React, {useMemo, useRef, useState} from 'react'
import TinderCard from 'react-tinder-card'
import {Check, X} from "react-feather";

function Swiper({swipeModels, onSwipe, emptyText}) {

    const [currentIndex, setCurrentIndex] = useState(swipeModels.length - 1)
    const [lastDirection, setLastDirection] = useState();
    const currentUSer = swipeModels[currentIndex];
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(swipeModels.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
        if (direction === 'right') {
            console.log("вправо")
            onSwipe(swipeModels[index], true)
        } else {
            console.log("влево")
            onSwipe(swipeModels[index], false)
        }
    }

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }
    const swipe = async (dir) => {
        if (currentIndex < swipeModels.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }
    return (
        <div>
            <div className='cardContainer'>
                {
                    swipeModels.map((u, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe'
                            key={index}
                            onSwipe={(dir) => swiped(dir, u.name, index)}
                            onCardLeftScreen={() => outOfFrame(u.name, index)}
                        >
                            <div
                                style={{backgroundImage: 'url(' + u.url + ')'}}
                                className='card'
                            >
                                <X className={"icons close"} onClick={() => swipe("left")}/>
                                <h3>{u.name?u.name:u.title}</h3>
                                <Check className={"icons accept"} onClick={() => swipe("right")}/>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
            <div className={"description"}>
                <div className={"panel"}>
                    <span>{currentUSer ? currentUSer.description : emptyText}</span>
                </div>
            </div>
        </div>
    )
}

export default Swiper
