import React from 'react';
import {
    BrowserRouter as Router,
    Routes,Route, Navigate, Outlet
  } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { Cita } from '../components/cita/Cita';
import { Home } from '../components/home/Home';
import { Navbar } from '../components/ui/Navbar';
import ScrollToTop from '../hooks/scrollToTop';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const isLoggedIn = true;

    console.log("AppRouter");

    return ( <>
        
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route path="" element={<Home/>}/>

                        <Route path="login" element={<LoginScreen/>}/>
                        <Route path="cita" element={<Cita/>}/>

                    </Route>
                    
                </Routes>
            </ScrollToTop>
        </Router>
        
    </>

    ); 
        
};
