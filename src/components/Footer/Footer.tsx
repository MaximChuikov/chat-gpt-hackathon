import React from 'react';
import styles from './foot.module.scss'
import {Outlet, useNavigate} from 'react-router-dom'
import {Award, Search, Smile, User} from 'react-feather';

const Footer = () => {
    const nav = useNavigate()

    return (
        <>
            <Outlet/>
            <div className={styles.footer}>
                <div onClick={() => nav('/')} className={styles.element}>
                    <Search/>
                    <p>Люди</p>
                </div>
                <div onClick={() => nav('/events')} className={styles.element}>
                    <Award/>
                    <p>События</p>
                </div>
                <div onClick={() => nav('/memes')} className={styles.element}>
                    <Smile/>
                    <p>Хехе</p>
                </div>
                <div onClick={() => nav('/profile')} className={styles.element}>
                    <User/>
                    <p>Моя</p>
                </div>
            </div>
        </>

    );
};

export default Footer;