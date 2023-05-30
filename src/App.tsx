import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Backend from "./pages/back/Backend";


const App = () => {
    return (
        <Routes>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
            <Route path="/back" element={<Backend />}/>
        </Routes>
    );
}

export default App;
