/* 让组件自己的样式只对自己生效  injectGlobal 废弃了  换成了  createGlobalStyle */
import styled from 'styled-components';

/******返回顶部*******/

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 20px;
    font-size: 14px;
    border: 1px solid #ccc;
`;


/************************* HOME********************* */
export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        height: 270px;
        width: 625px；
    }

`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    /* padding-top: 30px; */
`;

/************************* List ********************* */
export const ListItem = styled.div`
    overflow: hidden;
    padding: 30px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;

    .list-title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    };
    .list-desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background:#a5a5a5;
    text-align: center;
    border-radius: 20px;
    /* 光标样式 */
    cursor: pointer; 
   
`;

/************************* Recommend ********************* */

export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`;


export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-top: 5px;
    /* 获取前面传回到图片 */
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

/************************* Writer ********************* */

export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    position: absolute;
    /* border: 1px solid #dcdcdc; */
    width: 280px;
    /* height: 300px; */
    font-size: 13px;
    text-align: center;

    
`;
export const WriterTitle = styled.div`
    color: #969696;
    text-align: left;
`;
export const WriterSwitch = styled.div`
    float: right;
    display: inline-block;
    /* font-size: 14px; */
    color: #969696;
    /* 光标样式 */
    cursor: pointer; 
    .spin {
        display: block;
        float: left;
        font-size: 14px;
        margin-right: 2px;
        transition: all .2s ease-in;
        /* transform: rotate(0deg); */
        transform-origin: center center;
    }
`;

export const WriterList = styled.div`
    position: absolute;
    margin: 0 0 20px;
    list-style: none;
    /* width: 240px; */
    margin-bottom: 20px;
    /* margin-top: 20px; */
    padding-top: 0;
    /* border: 1px solid #dcdcdc; */
    width: 280px;
    height: 300px;
    font-size: 13px;
    text-align: center;
`;


export const WriterListContent = styled.div`
    /* position: absolute; */
    float: left;
    overflow: hidden;
    padding: 20px 0;
    /* width:120px; */
    .list-pic {
        /* display: block; */
        width: 47px;
        height: 47px;
        float:left;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
`;

export const WriterListContentListInfo = styled.div`
    text-align:left;
    margin-left: 60px;
    /* width:180px */
    .list-title {
        padding-top: 5px;
        /* margin-right: 60px; */
        font-size: 14px;
        display: block;
    };
    .list-desc {
        margin-top: 10px;
        font-size: 12px;
        color: #969696;
    }
`;


export const WriterListGuanzhu = styled.div`
    float: right;
    padding: 25px 0;
    font-size: 14px;
    /* width:60px; */
    display: block;
    color: #42c02e;
`;