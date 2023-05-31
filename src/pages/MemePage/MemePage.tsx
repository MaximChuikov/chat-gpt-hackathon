import React from 'react';
import '../../components/Card/App.css'
import Swiper from "@Components/Card/examples/Swiper";
import styles from '../card.module.scss'
import Header from "@Components/Header/Header";
import {BarChart} from 'react-feather';
import {useNavigate} from "react-router-dom";
import MemeController from "../../backend/controller/MemeController";

const MemePage = () => {
    const users = MemeController.getAllUncheckMeme()
    const nav = useNavigate();
    const openLikedPage = () => {
        nav("/likedMemes")
    }
    return (
        <>
            <div>
                <Header text={"Поиск мемов"}/>
                <BarChart className={`${styles.icon} ${styles.top}`} onClick={openLikedPage}/>
            </div>
            <div className={styles.cardContainer}>
                <Swiper swipeModels={users} onSwipe={MemeController.switchMeme} emptyText={"Мемов больше нет("}/>
            </div>
        </>

    );
};

export default MemePage;