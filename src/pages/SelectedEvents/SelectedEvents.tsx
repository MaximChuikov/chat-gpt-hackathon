import React from "react"
import styles from "@Pages/anotherPage.module.scss";
import {ArrowLeft, Plus} from "react-feather";
import Activity from "../../backend/models/Activity";
import ActivityController from "../../backend/controller/ActivityController";
import {useNavigate} from "react-router-dom";

const SelectedEvents = () => {
    const activities = ActivityController.getAllLikeActivity();
    const nav = useNavigate();
    const getActivityCard = (activity: Activity) => {
        return (<div className={styles.activityCard}>
            <div key={activity.id} className={styles.userCard}>
                <img src={activity.url} alt={"activity"} className={styles.userImage}/>
                <div className={styles.cardText}>
                    <span className={styles.userText}>{activity.title}</span>
                    <span className={styles.activityDescription}>{activity.description}</span>
                </div>
                <span className={styles.activityDate}>{activity.createDate}</span>
            </div>
            {getBtns(activity.isActive)}
        </div>);
    }
    const getBtns = (isActivate: boolean) => {
        if (isActivate) {
            return (<div className={styles.btnBar}>
                <button className={styles.cancel}>Отмена</button>
                <button className={styles.accept}>Проведу</button>
            </div>);
        } else {
            return (<div className={styles.btnBar}>
                <button className={styles.cancel}>Не приду</button>
                <button className={styles.accept}>Приду</button>
            </div>);
        }
    }
    const goBack = () => {
        window.history.back();
    }
    return (
        <div className={styles.likedPage}>
            <div>
                <div className={styles.header}>
                    <ArrowLeft className={styles.back} onClick={goBack}/>
                    <span className={styles.headerText}>Ближайшие события</span>
                    <Plus className={`${styles.back} ${styles.plus}`}  onClick={()=>{
                        nav("/newEvent");
                    }}/>
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