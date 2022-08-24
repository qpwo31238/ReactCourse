import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";
import CVSLogo from "../../images/cvs_logo.png";
import Remark from "../../images/remark.png";
import QRcode from "../../images/QRcode.png"; 
import AppStore from "../../images/AppStore.png";
import GooglePlay from "../../images/GooglePlay.png";
import AppGallery from "../../images/AppGallery.png";
import {FacebookFilled,InstagramFilled,LinkedinFilled} from "@ant-design/icons"


const StyledFooter = styled.footer`
    background-color: #fbfbfb;
    width: 100vw;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid #bbbbbb;
`;
const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;
const FlexSpaceEvenly = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const FooterColumn = styled.div`
    display: flex;
    flex-direction:column;
    width:33.333%;
    margin-bottom:16px;
    @media (min-width: 768px) {
        width:20%;
        margin-bottom:16px;
    }
    a{
        margin-bottom: 4px;
        color: rgba(0, 0, 0,0.54);
    }
`;
const FooterColumnTitle = styled.h4`
    font-weight: 700;
    color: #2c2a2a;
    margin-bottom: 8px;
`;
const PaddingTopRem = styled.div`
    padding-top:1.5rem;
`;


const Footer = () => {
    return( <StyledFooter>
        <Container>
            <Box>
                <FooterColumn>
                    <FooterColumnTitle>客服中心</FooterColumnTitle>
                    <Link to="#!">幫助中心</Link>
                    <Link to="#!">蝦皮商城</Link>
                    <Link to="#!">付款方式</Link>
                    <Link to="#!">蝦皮錢包</Link>
                    <Link to="#!">蝦幣</Link>
                    <Link to="#!">運費補助</Link>
                    <Link to="#!">退貨退款</Link>
                    <Link to="#!">延長訂單撥款</Link>
                    <Link to="#!">聯絡客服</Link>
                    <Link to="#!">防詐騙宣導</Link>
                </FooterColumn>
                
                <FooterColumn>
                    <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
                    <Link to="#!">關於蝦皮</Link>
                    <Link to="#!">加入我們</Link>
                    <Link to="#!">蝦皮條款</Link>
                    <Link to="#!">隱私權政策</Link>
                    <Link to="#!">蝦皮商城</Link>
                    <Link to="#!">賣家中心</Link>
                    <Link to="#!">限時特賣</Link>
                    <Link to="#!">聯絡媒體</Link>
                </FooterColumn>

                <FooterColumn>
                    <FooterColumnTitle>物流合作</FooterColumnTitle>
                    <img src={CVSLogo} alt="cvs_logo" width="80%" />
                    <PaddingTopRem>
                        <FooterColumnTitle>蝦皮直送包裝減量標章</FooterColumnTitle>
                        <img src={Remark} alt="remark" width="30%" />
                    </PaddingTopRem>
                </FooterColumn>

                <FooterColumn>
                    <FooterColumnTitle>關注我們</FooterColumnTitle>
                    <Link to="#!">
                        <FacebookFilled style={{ fontSize: '20px', color: '#000000' ,marginRight:'10px' }} />
                        Facebook
                    </Link>
                    <Link to="#!">
                        <InstagramFilled style={{ fontSize: '20px', color: '#000000' ,marginRight:'10px' }} />
                        Instagram
                    </Link>
                    <Link to="#!">
                    <LinkedinFilled style={{ fontSize: '20px', color: '#000000' , marginRight:'10px' }}/>
                        LinkedIn
                    </Link>
                </FooterColumn>

                <FooterColumn>
                    <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
                    <FlexRow>
                        <img src={QRcode} alt="QRcode" width="50%" />
                        <div>
                            <img src={AppStore} alt="QRcode"  width="80%" />
                            <img src={GooglePlay} alt="QRcode"  width="80%" />
                            <img src={AppGallery} alt="QRcode"  width="80%" />
                        </div>  
                    </FlexRow>
                </FooterColumn>

            </Box>
        </Container>
    </StyledFooter>)
};

export default Footer;