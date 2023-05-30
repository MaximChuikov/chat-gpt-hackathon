import React from 'react';
import styles from "./PersonalPage.module.scss";
import  {mainUser} from "../../backend/models/MainUser";
import Header from "@Components/Header/Header";

const UserPage = () => {
    return (
        <div className={styles.aboutMe}>
            <Header text={"Начальная анкета"}/>
                <div className={styles.userPage}>
                    <div className={styles.avatar}>
                        <img src={mainUser.avatar} alt="User avatar" />
                    </div>
                    <div className="user-page__description">{mainUser.description}</div>
                        <div className="user-page__images">
                            { "Здесь можно добавить блоки для картинок "}
                        </div>
                    <div className="user-page__memes">
                        { "Здесь можно добавить блоки для мемов"}
                    </div>
            </div>
        </div>

    );
};

export default UserPage;