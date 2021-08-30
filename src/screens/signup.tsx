import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import InputText from '../components/input';
import PrimaryButton from '../components/button';
import auth, { provider } from '../firebase';


const Title = styled.h1`
  color: black;
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

const SignUp = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const history = useHistory();

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential.user);
            history.push('/home');
        })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
        event.preventDefault();
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <Title>新規登録</Title>
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
                    登録
                </PrimaryButton>
                <PrimaryButton onClick={handleSubmit} disabled={false}>
                    Googleアカウントで登録
                </PrimaryButton>
            </form>
        </div>
    );
};

export default SignUp;
