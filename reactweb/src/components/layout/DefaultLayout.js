import styled,{ css } from "styled-components";
import Container from "../common/Container";
import Header from "./Header";
import Footer from "./Footer";


const PageHeader = styled.div`
    ${props => 
        props.fixed && 
        css`
            z-index: 1;
            position: fixed;
    `}
`;

const DefaultLayout = ({ fixedHeader, children }) => {
    return (
    <div>
        <PageHeader fixed={fixedHeader}>
            <Header />
        </PageHeader>

        <Container>{children}</Container>
        

        <Footer />
    </div>
    )
}

export default DefaultLayout 