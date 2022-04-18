import React, { useEffect, Fragment } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppBarComponent } from '../../components';
import CustomizedSnackbar from '../../views/Snackbar/CustomSnackbar';

const AppContent = ({ routes }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/' && navigate('/home');
        location.pathname === '' && navigate('/home');
    }, []);

    return (
        <Fragment>
            <AppBarComponent />
            <CustomizedSnackbar />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.id} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Fragment>
    );
};

export default AppContent;
