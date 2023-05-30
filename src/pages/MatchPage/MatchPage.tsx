import React from 'react';
import Card from '../../components/Card/examples/Simple'
import '../../components/Card/App.css'
import Advanced from "../../components/Card/examples/Advanced";
import styles from './card.module.scss'

const MatchPage = () => {
    return (
        <div className={styles.cardContainer}>
            <Advanced />
        </div>
    );
};

export default MatchPage;