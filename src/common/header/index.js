import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
//导入css动画组件
import { CSSTransition } from 'react-transition-group';
//常量词 ，公共方法 。等集合
import {actionCreators} from './store'
//导入css  UI样式
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SeacrchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoList,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button,
   
} from './style'; 

//页面跳转
import { Link } from 'react-router-dom';

// PureComponent 提升组件性能

class Header extends PureComponent{

    render(){
        const {SearchInfoListData,focused,handleInputFocus,handleInputBlur} = this.props
        return (
            // UIs 组件  负责页面样式
            <HeaderWrapper> 
                {/* Link 必须在 BrowserRouter 路由标签里面才能用  */}
                <Link to='/'> 
                    <Logo /> 
                </Link>
               
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载App</NavItem>
                    <NavItem className = 'right'>登录</NavItem>
                    <NavItem className = 'right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                   
                    <SeacrchWrapper>
                        {/* 把需要css动画效果的地方用 CSSTransition标签包裹住 */}
                        <CSSTransition
                            in = {focused} //感知 focused 的值是否发生了变化
                            timeout = {200} //单位毫秒
                            classNames = "slide"
                        >
                            <NavSearch
                                className = { focused ? 'focused':'' }//动态生成class
                                onFocus = { () => handleInputFocus(SearchInfoListData) }
                                onBlur = { handleInputBlur }
                            >
                            </NavSearch>
                        </CSSTransition>
                        <span className = { focused ? 'focused iconfont zoom':'iconfont zoom' } >&#xe62d;</span>
                        {/*搜索框中的热门搜索框 聚焦加载样式*/}
                       { this.getListArea() } 
                    </SeacrchWrapper>      
                       
                </Nav>
                <Addition>
                    <Button className = 'reg'>注册</Button>
                    <Button className = 'writting'><span className="iconfont">&#xe616;</span>写文章</Button>
                </Addition>
            </HeaderWrapper>
        );
    }



    getListArea = () => {
        const {focused, SearchInfoListData, totalPage, page, mouseIn, handleOnMouseEnter, handleOnMouseLeave, handleChangeSearchInfoPage} = this.props;
        const jsList = SearchInfoListData.toJS();//把 immutable 对象数据 转化为 js 对象
        const pageList = [];
        if(jsList.length){
            for (let index = ((page-1) * 10); index < page* 10; index++) {

                if(typeof(jsList[index])!="undefined"){  //不足10条数据时
                    pageList.push(
                        <SearchInfoItem key = { jsList[index] } > { jsList[index] } </SearchInfoItem>
                    ) 
                }   
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter = { handleOnMouseEnter }
                    onMouseLeave = { handleOnMouseLeave}
                >
                    <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch
                                onClick = { () => handleChangeSearchInfoPage(totalPage,page,this.spinIcon) }
                            >
                                <span 
                                    className="iconfont spin"

                                    //当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数 这样就可以动态设置css属性
                                    ref = { (icon) => { this.spinIcon = icon} }
                                >&#xe746;</span>
                                换一批 
                            </SearchInfoSwitch>
                    </SearchInfoTitle>     
                    <SearchInfoList>
                        {/* {
                            SearchInfoListData.map((item) => {
                                return   <SearchInfoItem key = { item } > { item } </SearchInfoItem>
                            })
                        } */}
                       { pageList }
                    </SearchInfoList>
                </SearchInfo>
            ) 
        }else{
            return null;
        }
    }
}






//获取数据   // focused 主要是用来聚焦跟失焦
const mapStateToProps = (state) =>{   
    return { //把store的数据 映射 到组件中来     immutable 对象数据 不能使用  . 出来  
        // header 是因为 加载了 一个大的reduer 然后使用了其中 一个   叫header 的一个小的 reduer 
        // focused: state.header.focused     //js对象用法

        // header 被redux-immutable 变成了一个immutable 对象数据
        // focused: state.get('header').get('focused') //immutable 对象数据
        // 等于
        focused: state.getIn(['header','focused']),//焦点状态
        SearchInfoListData: state.getIn(['header','SearchInfoListData']),//数据
        page: state.getIn(['header','page']),//页码  
        mouseIn: state.getIn(['header','mouseIn']),// 热门关键词框 鼠标状态
        totalPage: state.getIn(['header','totalPage']),//总页数
    }
}

//传出数据
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(SearchInfoListData) { //聚焦
            if(SearchInfoListData.size === 0) {
                dispatch(actionCreators.getSearchInfoList());//输入框聚焦获取 热门搜索词数据
            }
            dispatch(actionCreators.getInputFocusAction());//输入框聚焦变长
          
        },
        handleInputBlur() {//失焦
            dispatch(actionCreators.getInputBlurAction()); //输入框失焦变短
        },
        handleOnMouseEnter() { //鼠标在 热门关键词框 上是 热门关键词框的状态 移入
            dispatch(actionCreators.getChangeMouseEnter()); //输入框失焦变短
        },
        handleOnMouseLeave() { //鼠标在 热门关键词框 上是 热门关键词框的状态 移出
            dispatch(actionCreators.getChangeMouseLeave()); //输入框失焦变短
        },
        handleChangeSearchInfoPage(totalPage,page,spin) { //更换热门搜索词 
            // spin.style.transform = 'rotate(360deg)';//换一换的动态
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0;
            }
            //动态设置 css样式
            spin.style.transform = 'rotate('+ (originAngle+360) +'deg)'
            // console.log(originAngle);
            if(page<totalPage){
                dispatch(actionCreators.gethandleChangeSearchInfoPage(page+1)); //输入框失焦变短
            }else{
                dispatch(actionCreators.gethandleChangeSearchInfoPage(1)); //输入框失焦变短
            }

            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);  //connect返回的结果是一个容器组件  负责页面所需要的数据