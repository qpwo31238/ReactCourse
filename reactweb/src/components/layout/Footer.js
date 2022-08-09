import styled from "styled-components";
import Container from "../common/Container";

const StyledFooter = styled.footer`
    background-color: #fbfbfb;
    width: 100vw;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid #bbbbbb;
`;

const Footer = () => {
    return <StyledFooter>
        <Container>Footer</Container>
    </StyledFooter>
};

export default Footer;