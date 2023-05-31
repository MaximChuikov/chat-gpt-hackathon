import React from "react";
import styles from "./Header.module.scss";

const Header = ({text}:{text:string}) => {
    return(<div className={styles.header}>
        <span className={styles.headerText}>{text}</span>
        <img src={"/img/icon_star.png"}/>
    </div>)
}
export default Header