import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import styles from './App.module.scss';
import NewEvent from "@Pages/NewEvent/NewEvent";
import MatchPage from "@Pages/MatchPage/MatchPage";
import Footer from "@Components/Footer/Footer";
import AboutMe from "@Pages/aboutMe/AboutMe";
import PersonalPage from "@Pages/personalPage/PersonalPage";
import UserController from "./backend/controller/UserController";
import LikedPage from "@Pages/LikedPage/LikedPage";
import EventsPage from "@Pages/eventsPage/EventsPage";
import SelectedEvents from "@Pages/SelectedEvents/SelectedEvents";

const App = () => {
    const nav = useNavigate();

    useEffect(() => {

        const user = UserController.getMainUser();
        if (!user.name) {
            nav("/aboutMe");
        }
    }, [])
    return (
        <Routes>
            <Route path="/aboutMe" element={<AboutMe/>}/>
            <Route element={<Footer/>}>
                <Route path="/" element={<MatchPage/>}/>
                <Route path="/events" element={<EventsPage/>}/>
                <Route path="/memes" element={<div className={styles.appBody}>error</div>}/>
                <Route path="/profile" element={<PersonalPage/>}/>
            </Route>
            <Route path="/liked" element={<LikedPage/>}/>
            <Route path="/selected" element={<SelectedEvents/>}/>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
        </Routes>
    );
}

export default App;
