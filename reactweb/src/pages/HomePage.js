import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import styled from 'styled-components';
import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../components/common/ClearFix.js"
import { Carousel } from 'antd';
import Banner1 from "../images/banner/banner1.png";
import Banner2 from "../images/banner/banner2.png";
import Banner3 from "../images/banner/banner3.png";
import Banner4 from "../images/banner/banner4.png";
import Product1 from "../images/product/product1.jpg";
import Product2 from "../images/product/product2.jpg";
import Product3 from "../images/product/product3.jpg";
import Product4 from "../images/product/product4.jpg";
import Product5 from "../images/product/product5.jpg";
import ProductCard from "../components/product/ProductCards";

const BannerBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    margin-bottom: 24px;
`;
const BannerCarouselContainer = styled.div`
    width: 100%;
    padding: 4px 0;
    @media (min-width: 768px) {
        width: 66.67%;
        padding: 4px 4px 0 0;
    }
`;
const BannerSectionContainer = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 33.33%;
    }
`;
const BannerContainer = styled.div`
    width: 100%;
    padding: 0 0 4px 0;
    @media (min-width: 768px) {
        padding: 2px 0 2px 2px;
    }
`;
const Image = styled.div`
    width: 100%;
    height: ${(props) => props.height}px;
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: cover;
`;
const BannerFeatureContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
    padding: 8px 0;
    border-right: 1px solid rgba(0,0,0,0.1); 
    border-bottom: 1px solid rgba(0,0,0,0.1); 
    border-left: 1px solid rgba(0,0,0,0.1); 
`;
const BannerFeatureColumn = styled.div`
    width: 33.3333%;
    text-align: center;
`;
const CustomerContainer = styled.div`
    margin-bottom: 48px;
`;
const ProductCollectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin:-4px;
    margin-bottom: 48px;
`;
const ProductContainer = styled.div`
    padding: 4px;
    width: 100%;
    @media (min-width: 577px) {
        width: 50%;
    }
    @media (min-width: 768px) {
        width: 20%;
    }
`;
const InfoTopContainer = styled.div`
    border-top: 2px solid #ee4d2d;
    background-color: #fff;
    color: rgba(0,0,0,.54);
    padding: 1.5rem 0;     
`;
const InfoTopSection = styled.div`
    display: inline;
    width: 100vw;
    background-color: white;
`;
const InfoTopSectionTitle = styled.div`
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 4px;
`;
const InfoTopSectionPara = styled.div`
    font-size: .85rem;
    margin-bottom: 16px;
`;


const HomePage = () => {
    return <DefaultLayout fixedHeader>

        <ClearFix />

        <BannerBox>

            <BannerCarouselContainer>
                <Carousel autoplay>
                    <Link to="/p001">
                        <Image height={200} url={Banner1}></Image>
                    </Link>
                    <Link to="/p002">
                        <Image height={200} url={Banner2}></Image>
                    </Link>
                    <Link to="/p003">
                        <Image height={200} url={Banner3}></Image>
                    </Link>
                    <Link to="/p004">
                        <Image height={200} url={Banner4}></Image>
                    </Link>
                </Carousel>
            </BannerCarouselContainer>

            <BannerSectionContainer>
                <BannerContainer>
                    <Link to="/p005">
                        <Image height={100} url={Banner4}></Image>
                    </Link>
                </BannerContainer>
                <BannerContainer>
                    <Link to="/p006">
                        <Image height={100} url={Banner2}></Image>
                    </Link>
                </BannerContainer>
            </BannerSectionContainer>

            <BannerFeatureContainer>
                <BannerFeatureColumn>十五天鑑賞期</BannerFeatureColumn>
                <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
                <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
            </BannerFeatureContainer>

        </BannerBox>

        <CustomerContainer>
            <Link to="/advertising">
                <Image height={280} url={Banner3}></Image>
            </Link>
        </CustomerContainer>

        <ProductCollectionContainer>

            <ProductContainer>
                <Link to="/p001">
                    <ProductCard 
                        title="product1" 
                        coverUrl={Product1} 
                        salePrices={[859]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p002">
                    <ProductCard 
                        title="product2" 
                        coverUrl={Product2} 
                        salePrices={[328]} 
                        listPrices={[599]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p003">
                    <ProductCard 
                        title="product3" 
                        coverUrl={Product3} 
                        salePrices={[100,200]} 
                        listPrices={[200,299]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p004">
                    <ProductCard 
                        title="product4" 
                        coverUrl={Product4} 
                        salePrices={[100,200]} 
                        listPrices={[200,299]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p005">
                    <ProductCard 
                        title="product5" 
                        coverUrl={Product5} 
                        salePrices={[100,200]} 
                        listPrices={[200,299]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p006">
                    <ProductCard 
                        title="product5" 
                        coverUrl={Product5} 
                        salePrices={[100,200]} 
                        listPrices={[200,299]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p007">
                    <ProductCard 
                    title="product4" 
                    coverUrl={Product4} 
                    salePrices={[100,200]} 
                    listPrices={[200,299]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p008">
                    <ProductCard 
                        title="product3" 
                        coverUrl={Product3} 
                        salePrices={[100,200]} 
                        listPrices={[200,299]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p009">
                    <ProductCard 
                        title="product2" 
                        coverUrl={Product2} 
                        salePrices={[100,200]} 
                        listPrices={[200,299]} />
                </Link>
            </ProductContainer>

            <ProductContainer>
                <Link to="/p010">
                    <ProductCard 
                        title="product1" 
                        coverUrl={Product1} 
                        salePrices={[100,200]} 
                        listPrices={[200,299]} />
                </Link>
            </ProductContainer>

        </ProductCollectionContainer>

        <InfoTopContainer>
            <InfoTopSection>
                <InfoTopSectionTitle>花得更少買得更好，全新網路購物體驗</InfoTopSectionTitle>
                <InfoTopSectionPara>蝦皮購物是台灣首屈一指的電商平台，多樣服務包括<a href="#!">蝦皮商城</a>、<a href="#!">蝦皮超市</a>、<a href="#!">蝦皮團購</a>等，更陸續設立<a href="#!">蝦皮店到店</a>，提供取貨新選擇，服務更升級！簡易操作介面、清楚的商品評價讓你輕鬆選好物。在蝦皮下單後，透過訂單詳情可以隨時進行包裹查詢，無需擔心收不到你鎖訂購的商品！蝦皮更承諾保障你的交易安全，提供多種安全可靠的付款方式，街口支付、等行動支付超方便！趕快到蝦皮購物使用多到不行的<a href="#!">免運券</a>，開啟全新的購物體驗！</InfoTopSectionPara>
            </InfoTopSection>
            <InfoTopSection>
                <InfoTopSectionTitle>月月購物節盛典，免運折扣享不完</InfoTopSectionTitle>
                <InfoTopSectionPara>每月 18 號的<a href="#!">月中狂購節</a>以及 25 號的<a href="#!">商城狂購節</a>定期優惠必跟！遇上月月盛典還有多重優惠、蝦皮免運券大放送！每年一、二月的農曆新年<a href="#!">蝦皮年貨節</a>，蝦皮發紅包讓你便宜買年貨，除舊佈新添好運；六月<a href="#!">蝦皮 618 年中慶</a>，用最划算折扣開啟炎炎夏日；九月 蝦皮 99 購物節，全台灣最大網購盛典，眾多優惠好禮全台瘋搶；十一月的 1111 蝦皮雙 11 購物節，不論單身或死會，都該趁機入手高品質的商品犒賞自己；十二月，1212 蝦皮雙 12，揪你一起狂歡慶祝，聖誕驚喜與新年好禮隨你挑。2.2、3.3、4.4、5.5、7.7、8.8、10.10月月有盛典，最多的折扣優惠活動盡在蝦皮購物</InfoTopSectionPara>
            </InfoTopSection>
            <InfoTopSection>
                <InfoTopSectionTitle>花得更少買得更好，全新網路購物體驗</InfoTopSectionTitle>
                <InfoTopSectionPara>蝦皮購物是台灣首屈一指的電商平台，多樣服務包括<a href="#!">蝦皮商城</a>、<a href="#!">蝦皮超市</a>、<a href="#!">蝦皮團購</a>等，更陸續設立<a href="#!">蝦皮店到店</a>，提供取貨新選擇，服務更升級！簡易操作介面、清楚的商品評價讓你輕鬆選好物。在蝦皮下單後，透過訂單詳情可以隨時進行包裹查詢，無需擔心收不到你鎖訂購的商品！蝦皮更承諾保障你的交易安全，提供多種安全可靠的付款方式，街口支付、等行動支付超方便！趕快到蝦皮購物使用多到不行的<a href="#!">免運券</a>，開啟全新的購物體驗！</InfoTopSectionPara>
            </InfoTopSection>
        </InfoTopContainer>
        

    </DefaultLayout>;
}

export default HomePage;