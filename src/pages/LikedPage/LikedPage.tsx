import React from "react";
import styles from './LikedPage.module.scss';
import Header from "@Components/Header/Header";
import User from "../../backend/models/User";
import {ArrowLeft, MessageCircle} from "react-feather";

const LikedPage = () => {
    const users = []
    const getUserCard = (user: User) => {
        return (<div key={user.id} className={styles.userCard}>
            <img src={user.url} alt={"person"} className={styles.userImage}/>
            <span className={styles.userText}>{user.name}</span>
            <MessageCircle className={styles.chat}/>
        </div>);
    }
    return (
        <div className={styles.likedPage}>
            <div>
                <div className={styles.header}>
                    <ArrowLeft className={styles.back}/>
                    <span className={styles.headerText}>Твои матчи</span>
                </div>

            </div>
            <div className={styles.matches}>
                {users.length > 0 ?
                    users.map(user => getUserCard(user)) :
                    <div className={styles.errorMessage}>Здесь пока что пусто (((</div>}
            </div>
        </div>
    )
}
export default LikedPage