import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');

    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return <Outlet />;
    } else {
        return <Navigate to="/login/link" />;
    }
};

export default ProtectedRoute;
