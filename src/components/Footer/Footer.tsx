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
                </div>
                <div onClick={() => nav('/events')}>
                    <Award/>
                </div>
                <div onClick={() => nav('/memes')}>
                    <Smile/>
                </div>
                <div onClick={() => nav('/profile')}>
                    <User/>
                </div>
            </div>
        </>

    );
};

export default Footer;