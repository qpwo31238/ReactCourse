import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    margin: auto;
    @media (min-width: 768px) {
        width: 95%;
    }
    @media (max-width: 992px) {
        width: 90%;
    }
    @media (min-width: 1200px) {
        width: 80%;
    }
`;

export default Container;