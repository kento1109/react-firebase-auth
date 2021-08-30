import React, { useReducer, useCallback } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import styled from 'styled-components';

import Login from './screens/login'
import SignUp from './screens/signup'
import Home from './screens/home'


import InputText from './components/input'
import PrimaryButton from './components/button'
import Auth from './components/auth'

import auth, { provider } from './firebase';


const Control = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
`;

export type AppGlobalState = {
  displayName: string | null;
  email: string | null;
};

type Action<Payload> = {
  type: string;
  payload: Payload;
};

const setDisplayName = (
  state: AppGlobalState,
  action: Action<string | null>
): AppGlobalState => ({
  ...state,
  displayName: action.payload,
});

const setEmail = (
  state: AppGlobalState,
  action: Action<string | null>
): AppGlobalState => ({
  ...state,
  email: action.payload,
});

const reducer = (state: AppGlobalState, action: Action<any>) => {
  switch (action.type) {
    case "SET_USER":
      return setDisplayName(state, action);
    case "SET_EMAIL":
      return setDisplayName(state, action);
    default:
      return state;
  }
};

const initialState = {
  displayName: null,
  email: null,
};

function App() {

  const [globalState, dispatch] = useReducer(reducer, initialState);

  const handleSetDisplayName = useCallback(
    (displayName: string | null) =>
      dispatch({
        type: "SET_NAME",
        payload: displayName,
      }),
    []
  );

  const handleSetEmail = useCallback(
    (email: string | null) =>
      dispatch({
        type: "SET_EMAIL",
        payload: email,
      }),
    []
  );

  // useEffect(() => {
  //   const subscriber = onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     if (user) {
  //       setUser(user);
  //     }
  //   });
  //   return subscriber;
  // }, []);


  // const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
  //   // createUserWithEmailAndPassword(auth, mail, password);
  //   signInWithPopup(auth, provider)
  //     .then(user => {
  //       alert("success : " + user.user.displayName + "さんでログインしました");
  //     })
  //     .catch(error => {
  //       alert(error.message);
  //     });

  //   event.preventDefault();
  // };


  return (
    <>
      <div className="App">
        {/* <Link to="/login">Login</Link> */}
        <Router>
          <Auth setDisplayName={handleSetDisplayName} setEmail={handleSetEmail} />
          <Switch>
            <Route path="/login">
              <Control>
                <Login />
              </Control>
            </Route>
            <Route path="/signup">
              <Control>
                <SignUp />
              </Control>
            </Route>
            <Route path="/home">
              <Home globalState={globalState} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
