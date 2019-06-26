import React,{PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import { connect } from 'react-redux';
import {homeActionCreators} from '../store'
//页面跳转
import { Link } from 'react-router-dom';

//PureComponent 提升组件性能
class List extends PureComponent {

    render() {
        const {articleList, page, getMoreList} = this.props;
        return (
            <div>
                {
                    articleList.map((item)=>{
                        return (
                            //   {/* Link 必须在 BrowserRouter 路由标签里面才能用  */}
                            // <Link key = { item.get('id') } to='/detaill' >
                            //动态路由传参 1 
                            // <Link key = { item.get('id') } to={'/detaill/' +  item.get('id')} >
                            //动态路由传参 2
                            <Link key = { item.get('id') } to={'/detaill?id=' +  item.get('id')} >
                                <ListItem >
                                    <img 
                                        src = { item.get('imgURL') } 
                                        className = 'list-pic'
                                        alt = '图片加载失败'
                                    >
                                    </img>
                                    <ListInfo>
                                        <h3 className='list-title'>{ item.get('title') }</h3>
                                        <p className='list-desc'>{ item.get('desc') }</p>
                                    </ListInfo>          
                                </ListItem>
                            </Link>
                        )
                    })
                }
            <LoadMore onClick = { () =>getMoreList(page) }> 阅读更多 </LoadMore>
            </div>
        )
    }

}



//获取数据   // focused 主要是用来聚焦跟失焦
const mapStateToProps = (state) =>{   
    return {
        articleList: state.getIn(['home','articleList']),//焦点状态
        page: state.getIn(['home','articleListPage']),//焦点状态
    }
}

//传出数据
const mapDispatchToProps = (dispatch) => {
    return {
       getMoreList(page){
            dispatch(homeActionCreators.getMoreList(page));
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);