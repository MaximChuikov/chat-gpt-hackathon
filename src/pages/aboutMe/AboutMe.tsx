import React, {useCallback, useState} from "react";
import styles from "./AboutMe.module.scss";
import Header from "@Components/Header/Header";

const AboutMe = () => {
    const states = [1, 2, 3];
    const [curState, setCurState] = useState(1);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [interests, setInterests] = useState("");

    const changeState = (state: number) => {
        if(curState === 1){
            if(name.length > 0){
                setCurState(state);
            }else{

            }
        }
    }
    const getPoint = (state: number) => {
        const onPointClick = useCallback(() => {
            changeState(state)
        }, [])
        return (
            <div className={styles.point + " " + (state === curState && styles.selectPoint)} onClick={onPointClick}/>
        )
    }
    const getFirstCard = () => {
        return (<div className={styles.cardInfo}>
            <span className={styles.cardTitle}>Познакомимся? 👋</span>
            <label htmlFor="userName" className={styles.inputLabel}>Введите ваше имя</label>
            <input
                type={"text"}
                className={styles.nameFiled}
                name="userName"
                placeholder={"Имя Фамилия"}
            />
            <button className={styles.nextBtn}>Далее →</button>
        </div>)
    }
    return (
        <div className={styles.aboutMe}>
            <Header text={"Начальная анкета"}/>
            <div className={styles.card}>
                {getFirstCard()}
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