import React from "react";
import styles from "./Header.module.scss";

const Header = ({text}:{text:string}) => {
    return(<div className={styles.header}>
        <span className={styles.headerText}>{text}</span>
    </div>)
}
export default Header