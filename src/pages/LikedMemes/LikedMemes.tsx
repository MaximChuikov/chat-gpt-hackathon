import React from 'react';
import styles from "@Pages/anotherPage.module.scss";
import memeStyle from './meme.module.scss'
import {ArrowLeft, MessageCircle} from "react-feather";
import MemeController from "../../backend/controller/MemeController";
import Meme from "../../backend/models/Meme";

const LikedMemes = () => {
    const memes = MemeController.getAllLikeMeme();
    const getMemeCard = (meme: Meme) => {
        return (<div key={meme.id} className={memeStyle.memeContainer} style={{backgroundImage: `url(${meme.url})`}}>
            <h3 className={memeStyle.text}>{meme.title}</h3>
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
                    <span className={styles.headerText}>Рейтинг мемов</span>
                </div>
            </div>


            {memes.length > 0 ? (
                <div className={memeStyle.memeHolder}>
                    {memes.map(meme => getMemeCard(meme))}
                </div>
                ) : (
                    <div className={styles.errorMessage} style={{padding: "0 10px"}}>Лайкайте мемы :)</div>
                )
            }


        </div>
    );
};

export default LikedMemes;