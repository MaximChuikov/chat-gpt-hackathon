import React, {useState} from 'react';
import styles from "./styles.module.scss"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {createMessage} from "../../backend/utils/openai";
import ActivityController from "../../backend/controller/ActivityController";
import UserController from "../../backend/controller/UserController";

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

    const [loader, setLoader] = useState(false)



    return (
        <div>
            {
                loader ? (
                    <div className={styles.loaderContainer}>
                        <span className={styles.loader} />
                    </div>
                ) : ""
            }
            <form className={styles.login} onSubmit={(e) => {
                e.preventDefault()
                // @ts-ignore
                const title = e.target[0].value;
                // @ts-ignore
                const desc = e.target[1].value;
                // @ts-ignore
                const gender = e.target[2].checked ? e.target[2].value : e.target[3].value || e.target[4].value;
                // @ts-ignore
                const date = e.target[4].value;

                ActivityController.createActivity({
                    title,
                    description: desc,
                    id: "20",
                    createDate: date,
                    url: "",
                    isActive: true
                })

                nav('/')
            }}>
                <button type={"button"} className={styles.ai} onClick={async (e) => {
                    setLoader(true)
                    await createMessage([{
                        role: "user",
                        content: UserController.getMainUser().description
                    }]).then(r => {
                        console.log(r)
                        if (r.reply) {
                            const data = JSON.parse(r.reply.content) as { title: string, description: string }
                            console.log(data)
                            setHeader(data?.title ?? "Ошибка")
                            setDesc(data?.description ?? "Ошибка")
                        }
                    })
                        .finally(() => setLoader(false))
                }}>
                    Ai
                    <svg width="79" height="46" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_618_1123)">
                            <path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"/>
                        </g>
                        <defs>
                            <filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"/>
                            </filter>
                            <linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0.6"/>
                                <stop offset="1" stopColor="white" stopOpacity="0.05"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
                <input type="text" placeholder="Заголовок"
                       value={header}
                       onChange={(e) => setHeader(e.target.value)}/>
                <textarea placeholder="Описание"
                          value={desc}
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
                        <input id="radio-3" name="radio" value={"Для всех"} type="radio"/>
                        <label htmlFor="radio-3" className={styles.radioLabel}>Для всех</label>
                    </div>
                </div>
                <input type={"datetime-local"}/>
                <div className={styles.buttonsContainer}>
                    <button>Я пойду</button>
                    <button>Не нравится</button>
                </div>
            </form>
        </div>
    )
};

export default AboutMe;