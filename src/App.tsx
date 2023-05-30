import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import AboutMe from "@Pages/AboutMe/AboutMe";
import NewEvent from "@Pages/NewEvent/NewEvent";
import MatchPage from "@Pages/MatchPage/MatchPage";
import Footer from "@Components/Footer/Footer";

const App = () => {
    return (
        <Routes>
            <Route element={<Footer/>}>
                <Route path="*" element={<div className={styles.appBody}>error</div>}/>
                <Route path="/event" element={<NewEvent/>}/>
                <Route path="/" element={<MatchPage/>}/>
                <Route path="/aboutMe" element={<AboutMe/>}/>
            </Route>
        </Routes>
    );
}

export default App;
