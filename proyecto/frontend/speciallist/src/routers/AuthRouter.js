import React from 'react';
import { Router, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';


export const AuthRouter = () => {
    console.log("Ebtre");
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Router>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ LoginScreen }
                    />

                    {/* <Route 
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    /> */}

                    <Navigate to="/auth/login" />


                </Router>
            </div>

        </div>
    )
}
