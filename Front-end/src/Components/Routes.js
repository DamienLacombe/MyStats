import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "../App"
import Clips from "./Clips"
import Profil from './Profil';
import Login from './Login';

const AppRouter = () => {

    return (
        <Router> 
            <Routes>
                <Route exact path="" element={<App/>}/>
                <Route path="/clips" element={<Clips/>}/>
                <Route path="/Profil" element={<Profil/>}/>
                <Route path="/Login" element={<Login/>}/>
                
            </Routes>
        </Router>
    )
}

export default AppRouter;