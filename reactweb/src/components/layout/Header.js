import styled from "styled-components";
import Container from "../common/Container";

const StyledHeader = styled.header`
    background-color: red;
    width: 100vw;
    height: 200px;
`;

const Header = () => {
    return <StyledHeader>
        <Container>Header</Container>
    </StyledHeader>
};

export default Header;