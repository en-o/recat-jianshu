/* 让组件自己的样式只对自己生效  injectGlobal 废弃了  换成了  createGlobalStyle */
import styled from 'styled-components';
import logoPic from '../../statics/nav-logo-4c7bbafe27adc892f3046e6978459bac.png';

/* head  */
export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
/* Logo head的左边 log*/
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

/* Nav heand的中间部分 */
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box; /*怪异盒子模型border-box定义的盒子，不会随着padding和boder的加入而增大盒子的占用空间*/
    margin: 0 auto;

`;

/* NavItem heand的中间部分中的文字 */
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left { /* 给 NavItem 组件 中的 classname = left 定义样式*/
        float: left
    }

    &.right {/* 给 NavItem 组件 中的 classname = right 定义样式*/
        float: right
        color: #969696;
    }

    &.active {
        color: #ea6f5a
    }
`;


/* SeacrchWrapper  搜索框*/
export const SeacrchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom { /* .表示下层元素 */
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused { /* &表示同级元素 */
            background: #777;
            color: #fff;
        }
    };
    

`;

/* NavSearch  heand的中间部分搜索 input */
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {/*修改placeholder颜色*/
        color: #999;
    };
    &.focused { /* 如果有 focused class 就会给输入框加宽度*/
        width: 240px;
        .iconfont {

        }
    };
    &.slide-enter {
        transition: all .2s ease-out;
    };
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }

`;
/*SearchInfo 热门搜索 */
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;

/*SearchInfoTitle 热门搜索 */
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
   
`;

/*SearchInfoSwitch 换一换*/
export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    /* 光标样式 */
    cursor: pointer; 
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        /* transform: rotate(0deg); */
        transform-origin: center center;
    }
`;



/*SearchInfoList 热门搜索词 li样式*/
export const SearchInfoList = styled.div`
/*内容会被修剪，并且其余内容是不可见的。 */
    overflow: hidden;
`;

/*SearchInfoItem 热门搜素词*/
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    font-size: 12px;
    color: #787878;
    border-radius: 3px;
     /* 光标样式 */
     cursor: pointer;
`;

/* Addition  head的right  */
export const Addition = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 56px;
`;

/* Addition  head的right  */
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;

    &.reg {
        color: #ec6149
    }
    &.writting {
        color: #ffffff;
        background: #ec6149;
    }

`;



