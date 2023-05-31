import React, {useCallback, useState} from "react";
import styles from "./AboutMe.module.scss";
import Header from "@Components/Header/Header";
import UserController from "../../backend/controller/UserController";
import {useNavigate} from "react-router-dom";

const AboutMe = () => {
    const states = [1, 2, 3];
    const navigator = useNavigate();
    const [isError, setIsError] = useState(false)
    const [curState, setCurState] = useState(1);
    const [name, setName] = useState("");
    const [gender, setGender] = useState<boolean>(true);
    const [interests, setInterests] = useState("");
    const getState = () => {
        switch (curState) {
            case 1:
                return getFirstCard();
            case 2:
                return getSecondCard();
            case 3:
                return getThirdCard();
            default:
                return getFirstCard();
        }
    }
    const submit = useCallback(() => {
        const user = {
            name: name,
            description: interests,
            memes: [],
            urls: [],
            avatar: "/img/nad9.jpg",
        }

        UserController.createMainUser(user);
        navigator("/");
    }, [name, gender, interests]);
    const changeState = useCallback((state: number) => {
        if (curState === 1) {
            if (name.length > 0) {
                setCurState(state);
            } else {
                setIsError(true);
            }
        } else if (curState === 2) {
            setCurState(state);
        } else if (curState === 3) {
            if (interests.length > 0) {
                setCurState(state);
            } else {
                setIsError(true);
            }
        }
    }, [name, curState, gender, interests]);
    const getPoint = (state: number) => {
        return (
            <div className={styles.point + " " + (state === curState && styles.selectPoint)}
                 onClick={() => changeState(state)}
                 key={"state" + state.toString()}
            />
        )
    }
    const changeName = (e: any) => {
        setName(e.target.value);
        setIsError(false);
    }
    const changeGender = (e: any) => {
        setGender(e.target.value === "true");
        setIsError(false);
    }
    const changeInterests = (e: any) => {
        setInterests(e.target.value);
        setIsError(false);
    }
    const getFirstCard = () => {
        return (<div className={styles.cardInfo}>
            <span className={styles.cardTitle}>Познакомимся? 👋</span>
            <label htmlFor="userName" className={styles.inputLabel}>Введите ваше имя</label>
            <input
                type={"text"}
                className={styles.nameFiled}
                value={name}
                onChange={changeName}
                name="userName"
                placeholder={"Имя Фамилия"}
            />
            <button className={`${styles.nextBtn} ${styles.nextBtnEnd}`}
                    onClick={() => changeState(2)}>
                Далее →
            </button>
        </div>)
    }
    const getSecondCard = () => {
        return (<div className={styles.cardInfo}>
            <span className={styles.cardTitle}>Узнаем друг друга поближе? 👉👈</span>
            <span className={styles.inputLabel}>Какой у тебя пол?</span>
            <fieldset className={styles.genderFiled}>
                <div className={styles.radioItem}>
                    <input
                        onChange={changeGender}
                        className={styles.male}
                        type={"radio"}
                        value={"true"}
                        name={"radio"}
                        id={"male"}
                        key={"male"}
                        checked={gender}
                    />
                    <label>male</label>
                </div>
                <div className={styles.radioItem}>
                    <input
                        onChange={changeGender}
                        className={styles.female}
                        type={"radio"}
                        value={"false"}
                        name={"radio"}
                        id={"female"}
                        key={"female"}
                        checked={!gender}
                    />
                    <label>female</label>
                </div>
            </fieldset>
            <div className={styles.navigateBtns}>
                <button className={styles.nextBtn} onClick={() => changeState(1)}>← Назад</button>
                <button className={styles.nextBtn} onClick={() => changeState(3)}>Далее →</button>
            </div>
        </div>);
    }
    const getThirdCard = () => {
        return (<div className={styles.cardInfo}>
            <span className={styles.cardTitle}>Расскажешь о себе? 🥰</span>
            <label htmlFor="userName" className={styles.inputLabel}>Напиши свои интересы</label>
            <textarea
                className={`${styles.interestFiled} ${styles.nameFiled}`}
                value={interests}
                onChange={changeInterests}
                name="interests"
                maxLength={140}
                placeholder={"Я люблю кошечек 😺"}
            />
            <div className={styles.navigateBtns}>
                <button className={styles.nextBtn} onClick={() => changeState(2)}>← Назад</button>
                <button
                    className={styles.nextBtn}
                    onClick={submit}>
                    Продолжить
                </button>
            </div>
        </div>)
    }
    return (
        <div className={styles.aboutMe}>
            <Header text={"Начальная анкета"}/>
            <div className={styles.card}>
                {getState()}
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