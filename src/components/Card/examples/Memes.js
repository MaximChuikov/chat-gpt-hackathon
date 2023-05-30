import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'

import MemeController from "../../../backend/controller/MemeController";

const memes = MemeController.getAllUncheckMeme()

function Memes () {
    const [currentIndex, setCurrentIndex] = useState(memes.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(memes.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
        console.log(direction)
        if (direction === 'right') {
            console.log(memes[index], "вправо")
           MemeController.switchMeme(memes[index], true)
        }
        else {
            console.log(memes[index], "влево")
            MemeController.switchMeme(memes[index], false)
        }
    }

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    return (
        <div>
            <link
                href='https://fonts.googleapis.com/css?family=Damion&display=swap'
                rel='stylesheet'
            />
            <link
                href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
                rel='stylesheet'
            />
            <div className='cardContainer'>

                {
                    memes.map((m, idx) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe'
                            key={idx}
                            onSwipe={(dir) => swiped(dir, m.name, idx)}
                            onCardLeftScreen={() => outOfFrame(m.name, idx)}
                        >
                            <div
                                style={{ backgroundImage: 'url(' + m.url + ')' }}
                                className='card'
                            >
                                <h3>{m.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Memes
