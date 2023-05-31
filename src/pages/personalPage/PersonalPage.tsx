import React, {useState} from 'react';
import styles from "./PersonalPage.module.scss";
import Header from "@Components/Header/Header";
import {Edit} from 'react-feather';
import UserController from "../../backend/controller/UserController";
import {useNavigate} from "react-router-dom";

const UserPage = () => {
    const [user, setUser] = useState(UserController.getMainUser());
    const nav = useNavigate();
    const changeUser = () => {
        nav("/aboutMe");
    }
    return (
        <div className={styles.aboutMe}>
            <div>
                <Header text={"Профиль"}/>
                <Edit className={styles.editText} onClick={changeUser}/>
            </div>
            <div className={styles.userPage}>
                <div className={styles.avatar}>
                    <img src={user.avatar} alt={"avatar"}/>
                </div>
                <div className={styles.textBlock}>
                    <h1 className={styles.name}>{user.name}</h1>
                </div>
                <div className={styles.descriptionBlock}>
                    <h5 className={styles.about}>Обо мне</h5>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.description}>
                            <span>{user.description}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.sliderRow}>
                    <span className={styles.sliderLabel}>Фото</span>
                    <div className={styles.sliderContainer}>
                        <img className={styles.memeImg} src={"/img/ящер.jpg"} alt={"/img/ящер.jpg"}/>
                        <img className={styles.memeImg} src={"/img/славянка1.jpg"}/>
                        <img className={styles.memeImg} src={"/img/славянка2.jpeg"}/>
                        <img className={styles.memeImg} src={"/img/ящер.jpg"}/>
                        <img className={styles.memeImg} src={"/img/славянка1.jpg"}/>
                        <img className={styles.memeImg} src={"/img/славянка2.jpeg"}/>
                    </div>
                </div>
                <div className={styles.sliderRow}>
                    <span className={styles.sliderLabel}>Мемы</span>
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
        </div>

    );
};

export default UserPage;