import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputText from '../components/input';
import PrimaryButton from '../components/button';
import Home from '../screens/home';
import SignUp from '../screens/signup'

import auth, { provider } from '../firebase';


const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;


const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const history = useHistory();

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                history.push('/home');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <Control>
                    <InputText
                        name="mail"
                        type="mail"
                        placeholder="email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </Control>
                <Control>
                    <InputText
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                </Control>
                <PrimaryButton onClick={handleSubmit} disabled={(email === "") || (password === "")}>
                    ログイン
                </PrimaryButton>
                <PrimaryButton onClick={handleSubmit} disabled={false}>
                    Googleアカウントでログイン
                </PrimaryButton>
            </form>
            <PrimaryButton onClick={() => { history.push('/signup'); }} disabled={false}>
                新規登録
            </PrimaryButton>
        </div>
    );
};

export default Login;
