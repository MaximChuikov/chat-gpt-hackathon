import React from "react"
import styles from "@Pages/anotherPage.module.scss";
import {ArrowLeft, MessageCircle} from "react-feather";
import ActivityController from "../../backend/controller/ActivityController";
import Activity from "../../backend/models/Activity";

const SelectedEvents = () => {
    const activities = ActivityController.getAllLikeActivity();
    const getActivityCard = (activity: Activity) => {
        return (<div key={activity.id} className={styles.userCard}>
            <img src={"activity.url"} alt={"person"} className={styles.userImage}/>
            <span className={styles.userText}>{activity.title}</span>
            <MessageCircle className={styles.chat}/>
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
                    <span className={styles.headerText}>Ближайшие события</span>
                </div>
            </div>
            <div className={styles.matches}>
                {activities.length > 0 ?
                    activities.map(activity => getActivityCard(activity)) :
                    <div className={styles.errorMessage}>Здесь пока что пусто (((</div>}
            </div>
        </div>
    )
}
export default SelectedEvents