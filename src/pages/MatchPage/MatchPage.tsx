import React from 'react';
import '../../components/Card/App.css'
import Swiper from "@Components/Card/examples/Swiper";
import styles from '../card.module.scss'
import Header from "@Components/Header/Header";
import {Heart} from 'react-feather';
import {useNavigate} from "react-router-dom";
import UserController from "../../backend/controller/UserController";

const MatchPage = () => {
    const users = UserController.getAllUncheckUser()
    const nav = useNavigate();
    const openLikedPage = () => {
        nav("/liked")
    }
    return (
        <>
            <div>
                <Header text={"Поиск людей"}/>
                <Heart className={`${styles.icon} ${styles.heart}`} onClick={openLikedPage}/>
            </div>
            <div className={styles.cardContainer}>
                <Swiper swipeModels={users} onSwipe={UserController.switchUser} emptyText={"Пар больше нет("}/>
            </div>
        </>

    );
};

export default MatchPage;