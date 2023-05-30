import React from 'react';
import '../../components/Card/App.css'
import Advanced from "../../components/Card/examples/Advanced";
import styles from './card.module.scss'
import Header from "@Components/Header/Header";
import {Heart} from 'react-feather';

const MatchPage = () => {
    return (
        <>
            <div>
                <Header text={"Поиск"}/>
                <Heart className={styles.heartImg}/>
            </div>
            <div className={styles.cardContainer}>
                <Advanced/>
            </div>
        </>

    );
};

export default MatchPage;