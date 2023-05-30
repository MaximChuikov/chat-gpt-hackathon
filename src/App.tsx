import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import AboutMe from "@Pages/aboutMe/AboutMe";


const App = () => {
    return (
        <Routes>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
            <Route path="/aboutMe" element={<AboutMe/>}/>
        </Routes>
    );
}

export default App;
