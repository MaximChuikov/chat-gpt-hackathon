import React, {useCallback, useState} from "react";
import styles from "./AboutMe.module.scss";
import Header from "@Components/Header/Header";

const AboutMe = () => {
    const states = [1, 2, 3];
    const [curState, setCurState] = useState(1)
    const getPoint = (state: number) => {
        const onPointClick = useCallback(() => {
            setCurState(state)
        }, [])
        return (
            <div className={styles.point + " " + (state === curState && styles.selectPoint)} onClick={onPointClick}/>
        )
    }
    return (
        <div className={styles.aboutMe}>
            <Header text={"Форма"}/>
            <div className={styles.card}>

            </div>
            <div className={styles.states}>
                {
                    states.map(state => getPoint(state))
                }
            </div>
        </div>
    )
}
export default AboutMe