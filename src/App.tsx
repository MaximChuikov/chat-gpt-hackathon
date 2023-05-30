import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import AboutMe from "@Pages/AboutMe/AboutMe";
import NewEvent from "@Pages/NewEvent/NewEvent";
import MatchPage from "@Pages/MatchPage/MatchPage";


const App = () => {
    return (
        <Routes>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
            {/*<Route path="/back" element={<Backend/>}/>*/}
            <Route path="/aboutMe" element={<AboutMe/>}/>
            <Route path="/event" element={<NewEvent/>}/>
            <Route path="/" element={<MatchPage/>}/>
        </Routes>
    );
}

export default App;
