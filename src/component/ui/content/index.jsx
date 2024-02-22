import React, { useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import Home from '../../../pages/home/Welcome';
import Login from '../../../pages/Login';

function Content() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div>
            { isAuthenticated ? <Home /> :
            <Login /> }
        </div>
    )
}

export default Content