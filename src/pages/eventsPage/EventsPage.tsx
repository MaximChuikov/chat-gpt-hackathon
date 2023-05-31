import React from 'react';
import '../../components/Card/App.css'
import Swiper from "@Components/Card/examples/Swiper";
import styles from '../card.module.scss'
import Header from "@Components/Header/Header";
import {Bookmark} from 'react-feather';
import {useNavigate} from "react-router-dom";
import ActivityController from "../../backend/controller/ActivityController";

const EventsPage = () => {
    const activities = ActivityController.getAllUncheckActivity()
    const nav = useNavigate();
    const openMarkPage = () => {
        nav("/selected")
    }
    return (
        <>
            <div>
                <Header text={"Поиск событий"}/>
                <Bookmark className={`${styles.icon} ${styles.mark}`} onClick={openMarkPage}/>
            </div>
            <div className={styles.cardContainer}>
                <Swiper swipeModels={activities} onSwipe={ActivityController.switchActivity} emptyText={"Событий больше нет("}/>
            </div>
        </>

    );
};

export default EventsPage;