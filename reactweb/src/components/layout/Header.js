import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";
import Logo from "../../images/logo.png";
import HomePage from "../../pages/HomePage";
import {Input} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons"

const StyledHeader = styled.header`
    background: linear-gradient(-180deg,#f53d2d,#f63);
    transition: transform .2s cubic-bezier(.4,0,.2,1);
    width: 100vw;
    padding: 20px;
`;
const StyledHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    img{
        filter:brightness(10);
    }
`;
const Navigator = styled.div`
    a{
        padding: 8px 16px 8px 0;
        color: white;
        text-decoration: none;
        position: relative;
    }
    a:not(:first-child):after {
        position: absolute;
        content: "";
        height: 0.9375rem;
        width: 0;
        border-left: 1px solid hsla(0,0%,100%,.5);
        border-right: 1px solid hsla(0,0%,100%,.5);
        left: -8px;
        top: calc(50% - 7px);
    }
`;
const Toolbar = styled.div`
    a{
        padding: 8px 0px 8px 12px;
        color: white;
        text-decoration: none;
    }
`;
const Box = styled.div`
    display: flex;
    align-items: center;
`;

const onSearch = (value) => console.log(value);

const Header = ({ className }) => {
    const { isAuthenticated } = useContext (AuthContext) 
    return( 
    <StyledHeader>
        <Container>
            <StyledHeaderSection>
                <Navigator>
                    <a href="#!">蝦皮購物</a>
                    <a href="#!">下載</a>
                    <a href="#!">追蹤我們</a>
                    <a href="#!">部落格</a>
                </Navigator>
                <Toolbar>
                    <a href="#!">通知</a>
                    <a href="#!">幫助中心</a>
                    
                    {isAuthenticated ? (
                        <a href="#!">帳號</a>
                    ) : (
                        <a href="#!">登入/註冊</a>
                    )}

                </Toolbar>
            </StyledHeaderSection>
        <StyledHeaderSection>
            <Link to="/">
                <img src={Logo} alt="logo" height={40}></img>
            </Link>
            <Box>
                <Input.Search
                    style={{marginRight:8}}
                    placeholder="在商城搜尋" 
                    onSearch={onSearch} 
                    enterButton 
                />
                <Link to="/cart">
                    <ShoppingCartOutlined style={{ fontSize: '32px', color: '#ffffff' }} />
                </Link>
            </Box>
        </StyledHeaderSection>
        </Container>
    </StyledHeader>
    )
};

export default Header;