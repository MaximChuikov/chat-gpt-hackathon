import React from 'react';
import styles from "./PersonalPage.module.scss";
import  {mainUser} from "../../backend/models/MainUser";
import Header from "@Components/Header/Header";

const UserPage = () => {
    return (
        <div className={styles.aboutMe}>
            <Header text={"Страничка пользователя"}/>
                <div className={styles.userPage}>
                    <div className={styles.avatar}>
                        <img src={"/img/nad9.jpg"}/>
                    </div>
                    <div className={styles.textBlock}>
                        <h1 className={styles.name}>{mainUser.name}</h1>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <h5 className={styles.about}>Обо мне</h5>
                        <div className={styles.description}>
                            <text>{mainUser.description}</text>
                        </div>
                    </div>
                    <div className={styles.downloadBlock}>
                        <div className={styles.imgBlock}>
                            <div className={styles.sliderContainer}>
                                <div className="slide"><img src="/img/nad9.jpg"/></div>
                                <div className="slide"><img src="/img/richard.jpg"/></div>
                                <div className="slide"><img src="/img/jared.jpg"/></div>
                                <div className="slide"><img src="/img/event.png"/></div>
                                <div className="slide"><img src="/img/monica.jpg"/></div>
                            </div>
                        </div>
                        <div className={styles.memeBlock}>
                            { "Здесь можно добавить блоки для мемов"}
                        </div>
                    </div>

            </div>
        </div>

    );
};

export default UserPage;