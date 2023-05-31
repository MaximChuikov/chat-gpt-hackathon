import React, {useMemo, useRef, useState} from 'react'
import TinderCard from 'react-tinder-card'

import UserController from "../../../backend/controller/UserController";

const users = UserController.getAllUncheckUser()

function Users() {

    const [currentIndex, setCurrentIndex] = useState(users.length - 1)
    const [lastDirection, setLastDirection] = useState();
    const currentUSer = users[currentIndex];
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(users.length)
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
            UserController.switchUser(users[index], true)
        } else {
            console.log("влево")
            UserController.switchUser(users[index], false)
        }
    }

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    return (
        <div>
            <div className='cardContainer'>
                {
                    users.map((u, index) => (
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
                                <h3>{u.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
            <div className={"description"}>
                <div className={"panel"}>
                    <span>{currentUSer ? currentUSer.description : "Пар больше нет("}</span>
                </div>
            </div>
        </div>
    )
}

export default Users
