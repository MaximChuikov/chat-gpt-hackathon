import React, {useMemo, useRef, useState} from 'react'
import TinderCard from 'react-tinder-card'

import UserController from "../../../backend/controller/UserController";

const users = UserController.getAllUncheckUser()

const db = [
    {
        id : "1",
        name : "Лена",
        contact : "89999999999",
        mail : "Lena@mail.ru",
        description : "Люблю Гулять по парку",
        url : "/img/славянка1.jpg",
        gender : false,
        myActivity : new Map()
    },
    {
        id : "2",
        name : "Полина",
        contact : "89999999999",
        mail : "Polina@mail.ru",
        description : "Люблю Гулять под мостом за руку",
        url : "./img/славянка2.jpeg",
        gender : false,
        myActivity : new Map()
    },
    {
        id : "3",
        name : "Алина",
        contact : "89999999999",
        mail : "Alina@mail.ru",
        description : "Люблю Гулять по парку",
        url : "./img/славянка3.jpg",
        gender : true,
        myActivity : new Map()
    },
    {
        id : "4",
        name : "Тимур",
        contact : "89999999999",
        mail : "Timur@mail.ru",
        description : "Не люблю байкал",
        url : "./img/ящер.jpg",
        gender : false,
        myActivity : new Map()
    },
    {
        id : "5",
        name : "Лиза",
        contact : "89999999999",
        mail : "Lisa@mail.ru",
        description : "Люблю аниме про любовь",
        url : "./img/славянка4.jpeg",
        gender : false,
        myActivity : new Map()
    },
]

function Users() {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState();

    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
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
        console.log(direction)
        if (direction === 'right') {
            console.log(db[index], "вправо")
            UserController.switchUser(users[index], true)
        } else {
            console.log(db[index], "влево")
            UserController.switchUser(users[index], false)
        }
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    return (
        <div>
            <div className='cardContainer'>

                {
                    users.map((u, idx) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe'
                            key={idx}
                            onSwipe={(dir) => swiped(dir, u.name, idx)}
                            onCardLeftScreen={() => outOfFrame(u.name, idx)}
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
        </div>
    )
}

export default Users
