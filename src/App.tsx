import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Backend from "./pages/back/Backend";
import AboutMe from "@Pages/aboutMe/AboutMe";


const App = () => {
    return (
        <Routes>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
            <Route path="/back" element={<Backend/>}/>
            <Route path="/aboutMe" element={<AboutMe/>}/>
        </Routes>
    );
}

export default App;
