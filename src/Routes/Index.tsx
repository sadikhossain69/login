import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Authentication/Login';
import Register from 'pages/Authentication/Register';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </React.Fragment>
    );
}

export default Index;