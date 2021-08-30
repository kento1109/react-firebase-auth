import { Link } from "react-router-dom";

import styled from 'styled-components';

const Title = styled.h1`
  color: black;
`;


const Layout = () => {

    return (
        <div>
            <Link to="/login">ログイン</Link>
            {/* <Link to="/login">サインイン</Link> */}
        </div>
    );
};

export default Layout;
