import React,{Component} from 'react';
// 引入 ajax
// import axios from 'axios';
//css 样式
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from './style';
//子组件
import List from './commons/List'
import Writer from './commons/Writer'
import Recommend from './commons/Recommend'
import {connect} from 'react-redux';
//常量词 ，公共方法 。等集合
import {homeActionCreators} from './store'



class Home extends Component {

    //回到顶部
    handleScrollTop(){
        window.scrollTo(0,0)
    }

    render() {
        const {showScroll} = this.props;
        return (
            <div>
                <HomeWrapper >
                    <HomeLeft>
                        <img 
                            src = "//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            className = 'banner-img'
                            alt = '图片加载失败'
                        ></img>
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    {
                        showScroll? <BackTop onClick = { this.handleScrollTop}>回到顶部</BackTop>:null
                    
                    }
                    
                </HomeWrapper>
                
            </div> 
           
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();//创建了要销毁
    }

    componentWillUnmount() { //销毁
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }


    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }

}

//获取数据   // focused 主要是用来聚焦跟失焦
const mapStateToProps = (state) =>{   
    return {
        showScroll: state.getIn(['home','showScroll']),//返回顶部
    }
}

//传出数据
const mapDispatchToProps = (dispatch) => {
    return { 
      changeHomeData(){
            dispatch(homeActionCreators.getHomeInfoList());
      },
      changeScrollTopShow() {
            // console.log(document.documentElement.scrollTop)
            if(document.documentElement.scrollTop > 400){
                dispatch(homeActionCreators.toggleTopShow(true));
            }else{
                dispatch(homeActionCreators.toggleTopShow(false));
            }
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);