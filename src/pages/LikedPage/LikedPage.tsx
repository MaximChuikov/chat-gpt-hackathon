import React, {useState} from "react";
import styles from '../anotherPage.module.scss';
import User from "../../backend/models/User";
import {AlertTriangle, ArrowLeft, MessageCircle} from "react-feather";
import UserController from "../../backend/controller/UserController";
import {errorDelay} from "@Helpers/constants";

const LikedPage = () => {
    const [isError,setIsError] = useState(false);
    const users = UserController.getAllLikeUser();
    const openChat = () => {
        setIsError(true);
        const timer = setTimeout(()=>{
            setIsError(false);
        },errorDelay);
        return () => clearTimeout(timer);
    }
    const getUserCard = (user: User) => {
        return (<div key={user.id} className={styles.userCard}>
            <img src={user.url} alt={"person"} className={styles.userImage}/>
            <span className={styles.userText}>{user.name}</span>
            <MessageCircle className={styles.chat} onClick={openChat}/>
        </div>);
    }
    const goBack = () => {
        window.history.back()
    }
    return (
        <div className={styles.likedPage}>
            <div>
                <div className={styles.header}>
                    <ArrowLeft className={styles.back} onClick={goBack}/>
                    <span className={styles.headerText}>Твои матчи</span>
                </div>
            </div>
            <div className={styles.matches}>
                {users.length > 0 ?
                    users.map(user => getUserCard(user)) :
                    <div className={styles.errorMessage}>Здесь пока что пусто (((</div>}
            </div>
            <div className={`${styles.alertBlock} ${!isError && styles.alertBlockHide}`}>
                <div className={styles.alert}>
                    <span className={styles.error}>
                        Данная функция еще не реализована
                    </span>
                    <AlertTriangle className={styles.icon}/>
                </div>
            </div>
        </div>
    )
}
export default LikedPage