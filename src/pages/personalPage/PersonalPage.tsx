import React, {useState} from 'react';
import styles from "./PersonalPage.module.scss";
import Header from "@Components/Header/Header";
import UserController from "../../backend/controller/UserController";

const UserPage = () => {
    const [user, setUser] = useState(UserController.getMainUser())
    return (
        <div className={styles.aboutMe}>
            <Header text={"Профиль"}/>
            <div className={styles.userPage}>
                <div className={styles.avatar}>
                    <img src={user.avatar} alt={"avatar"}/>
                </div>
                <div className={styles.textBlock}>
                    <h1 className={styles.name}>{user.name}</h1>
                </div>
                <div className={styles.descriptionBlock}>
                    <h5 className={styles.about}>Обо мне</h5>
                    <div className={styles.description}>
                        <span>{user.description}</span>
                    </div>
                </div>
                <div className={styles.sliderContainer}>
                    <img className={styles.memeImg} src={"/img/ящер.jpg"}/>
                    <img className={styles.memeImg} src={"/img/славянка1.jpg"}/>
                    <img className={styles.memeImg} src={"/img/славянка2.jpeg"}/>
                    <img className={styles.memeImg} src={"/img/ящер.jpg"}/>
                    <img className={styles.memeImg} src={"/img/славянка1.jpg"}/>
                    <img className={styles.memeImg} src={"/img/славянка2.jpeg"}/>
                </div>
                <div className={styles.sliderContainer}>
                    <img className={styles.memeImg} src={"/img/meme3.jpg"}/>
                    <img className={styles.memeImg} src={"/img/meme4.jpg"}/>
                    <img className={styles.memeImg} src={"/img/meme5.jpg"}/>
                    <img className={styles.memeImg} src={"/img/meme3.jpg"}/>
                    <img className={styles.memeImg} src={"/img/meme4.jpg"}/>
                    <img className={styles.memeImg} src={"/img/meme5.jpg"}/>
                </div>
            </div>
        </div>

    );
};

export default UserPage;