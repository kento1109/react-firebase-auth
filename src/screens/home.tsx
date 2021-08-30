import { getAuth, signOut } from "firebase/auth";

import { useHistory } from "react-router-dom";

import { AppGlobalState } from "../App"
import PrimaryButton from '../components/button';
import auth from '../firebase';

type Props = {
    globalState: AppGlobalState;
};

const Home = (props: Props) => {

    const history = useHistory();

    const handleSignOut = (event: React.MouseEvent<HTMLElement>) => {
        signOut(auth)
            .then((userCredential) => {
                history.push('/login');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div>
            <h2>Welcome Home</h2>
            <div>You have been already logined !</div>
            <h3>User Info</h3>
            <div>Name : {props.globalState.displayName}</div>
            <PrimaryButton onClick={handleSignOut} disabled={false}>
                ログアウト
            </PrimaryButton>
        </div>
    );
};

export default Home;