import React from 'react';
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