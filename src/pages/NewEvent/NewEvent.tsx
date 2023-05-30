import React, {useState} from 'react';
import styles from "./styles.module.scss"
import {useLocation, useNavigate, useParams} from "react-router-dom";

export interface User {
    name: string
    interests: string
    gender: string
}

const AboutMe = () => {
    const nav = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const [header, setHeader] = useState(params.get("title") || "")
    const [desc, setDesc] = useState(params.get("desc") || "")

    return (
        <form className={styles.login} onSubmit={(e) => {
            e.preventDefault()
            // @ts-ignore
            const name = e.target[0].value;
            // @ts-ignore
            const interests = e.target[1].value;
            // @ts-ignore
            const gender = e.target[2].checked ? e.target[2].value : e.target[3].value;

            const user: User = {
                name,
                gender,
                interests
            }
            localStorage.setItem("user", JSON.stringify(user))

            nav('/')
        }}>
            <input type="text" placeholder="Заголовок"
                   value={header}
                   onChange={(e) => setHeader(e.target.value)}/>
            <textarea placeholder="Описание"
                      value={desc}
                      maxLength={200}
                      className={styles.big}
                      onChange={(e) => setDesc(e.target.value)}/>
            <div>
                <div className={styles.radio}>
                    <input id="radio-1" name="radio" type="radio" value={"Для парней"} defaultChecked={true}/>
                    <label htmlFor="radio-1" className={styles.radioLabel}>Для парней</label>
                </div>

                <div className={styles.radio}>
                    <input id="radio-2" name="radio" value={"Для девушек"} type="radio"/>
                    <label htmlFor="radio-2" className={styles.radioLabel}>Для девушек</label>
                </div>

                <div className={styles.radio}>
                    <input id="radio-2" name="radio" value={"Для всех"} type="radio"/>
                    <label htmlFor="radio-2" className={styles.radioLabel}>Для всех</label>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button>Я пойду</button>
                <button>Не нравится</button>
            </div>
        </form>
    )
};

export default AboutMe;