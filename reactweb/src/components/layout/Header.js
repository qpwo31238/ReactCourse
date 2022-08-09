import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: red;
    width: 100vw;
    height: 200px;
`;

const Header = () => {
    return <StyledHeader>This is a header</StyledHeader>
};

export default Header;