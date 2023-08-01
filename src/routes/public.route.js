import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../common/Header";

const PublicRoute = () => {
    let token = localStorage.getItem("tijoree-token");
    return token ? (
        <Navigate to="/" />
    ) : (
        <div>
            <div className="header-wrap">
                <Header />
            </div>
            <div className="main-wrap">
                <Outlet />
            </div>
            
        </div>
    );
};

export default PublicRoute;
