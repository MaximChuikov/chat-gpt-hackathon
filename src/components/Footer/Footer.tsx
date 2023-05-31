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
                <div onClick={() => nav('/')}>
                    <Search/>
                    <p>Люди</p>
                </div>
                <div onClick={() => nav('/events')}>
                    <Award/>
                    <p>События</p>
                </div>
                <div onClick={() => nav('/memes')}>
                    <Smile/>
                    <p>Хехе</p>
                </div>
                <div onClick={() => nav('/profile')}>
                    <User/>
                    <p>Моя</p>
                </div>
            </div>
        </>

    );
};

export default Footer;