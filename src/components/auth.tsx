import React, { ReactNode, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { onAuthStateChanged, User } from "firebase/auth";
import styled from 'styled-components';

import Home from '../screens/home';

import auth, { provider } from '../firebase';

type Props = {
    setDisplayName: (displayName: string | null) => void;
    setEmail: (email: string | null) => void;
};

const Auth = (props: Props) => {

    const { setDisplayName, setEmail } = props;

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user)
                setDisplayName(user.displayName);
                setEmail(user.email);
            }
        });
        return subscriber;
    }, []);

    if (!user) {
        return (
            < Redirect to="/login" />
        );
    }

    return (
        < Redirect to="/home" />
        // history.push("/home");
    );
};

export default Auth;
