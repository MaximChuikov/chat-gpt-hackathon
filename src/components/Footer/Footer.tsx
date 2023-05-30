import React from 'react';
import Heart from "@Components/Card/svgs/Heart";
import styles from './foot.module.scss'
import {Outlet, useNavigate} from 'react-router-dom'
import User from "@Components/Card/svgs/User";
import Find from "@Components/Card/svgs/Find";
import Frog from "@Components/Card/svgs/Frog";

const Footer = () => {
    const nav = useNavigate()

    return (
        <>
            <Outlet />
            <div className={styles.footer}>
                <div onClick={() => nav('/')}>
                    <Find />
                </div>
                <div onClick={() => nav('aboutMe')}>
                    <User />
                </div>
                <div onClick={() => nav('likes')}>
                    <Heart />
                </div>
                <div onClick={() => nav('/memes')}>
                    <Frog />
                </div>
            </div>
        </>

    );
};

export default Footer;