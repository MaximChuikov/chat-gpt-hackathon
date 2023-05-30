import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import NewEvent from "@Pages/NewEvent/NewEvent";
import MatchPage from "@Pages/MatchPage/MatchPage";
import Footer from "@Components/Footer/Footer";
import AboutMe from "@Pages/aboutMe/AboutMe";
import PersonalPage from "@Pages/personalPage/PersonalPage";

const App = () => {
    return (
        <Routes>
            <Route path="/aboutMe" element={<AboutMe/>}/>
            <Route element={<Footer/>}>
                <Route path="/" element={<MatchPage/>}/>
                <Route path="/events" element={<NewEvent/>}/>
                <Route path="/memes" element={<div className={styles.appBody}>error</div>}/>
                <Route path="/profile" element={<PersonalPage/>}/>
                <Route path="*" element={<div className={styles.appBody}>error</div>}/>
            </Route>
        </Routes>
    );
}

export default App;
