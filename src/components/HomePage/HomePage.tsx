import jwt_decode from 'jwt-decode';
import {useSelector} from 'react-redux';
import {UserDetails} from '../../dataModels/UserDetails';
import React, {useEffect, useState} from 'react';
import {AppState} from '../../redux/store/storeDataModels/AppState';
import {removeState} from '../../utils/localStorage';

export const HomePage: React.FC = () => {

    const token = useSelector((state: AppState) => state.login.token);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        if (!token) {
            return
        }
        const decodedToken = jwt_decode(token) as UserDetails;
        setUserEmail(decodedToken.email);
    }, [token]);

    const logoutUser = () => {
        removeState();
        window.location.reload();
    };

    return (
        <>
            <div>Jesteś zalogowany jako: {userEmail}</div>
            <button onClick={logoutUser}>Wyloguj</button>
        </>
    )
}