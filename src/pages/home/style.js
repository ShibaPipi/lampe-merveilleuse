import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 5px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    margin-left: 15px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-img {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-img {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .item {
        line-height: 27px;
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        margin-bottom: 8px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    overflow: hidden;
    width: 278px;
    border-radius: 3px;
    padding-top: 10px;
    text-align: center;
`;

export const RecommendWriter = styled.div`
    //position: relative;
    //left: 10px;
    //top: 10px;
    text-align: left;
    font-size: 14px;
    color: #969696;
    
`;

export const RecommendWriterSwitch = styled.div`
    float: right;
    display: inline-block;
    font-size: 14px;
    color: #969696;
`;

export const WriterItem = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
`;

export const ViewAllWriter = styled.div`
    padding: 10px;
    left: 0;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    margin: 30px 0;
    color: #fff;
    cursor: pointer;
`;

export const BackToTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    font-size: 12px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
`;