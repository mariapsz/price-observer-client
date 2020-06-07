import jwt_decode from 'jwt-decode';
import {useSelector} from 'react-redux';
import {UserDetails} from '../../dataModels/UserDetails';
import React, {useEffect, useState} from 'react';
import {AppState} from '../../redux/store/storeDataModels/AppState';
import {removeState} from '../../utils/localStorage';
import DiscussionForumPage from "../DiscussionForumPage/DiscussionForumPage";

export const HomePage: React.FC = () => {

    return (
        <DiscussionForumPage/>
    )
};