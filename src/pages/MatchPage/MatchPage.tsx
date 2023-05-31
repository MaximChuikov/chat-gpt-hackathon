import React from 'react';
import '../../components/Card/App.css'
import Users from "@Components/Card/examples/Users";
import styles from './card.module.scss'
import Header from "@Components/Header/Header";
import {Heart} from 'react-feather';
import {useNavigate} from "react-router-dom";

const MatchPage = () => {
    const nav = useNavigate();
    const openLikedPage = () => {
        nav("/liked")
    }
    return (
        <>
            <div>
                <Header text={"Поиск"}/>
                <Heart className={styles.heartImg} onClick={openLikedPage}/>
            </div>
            <div className={styles.cardContainer}>
                <Users/>
            </div>
        </>

    );
};

export default MatchPage;