import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import { actionCreators } from './store' 
//加载异步组件是用到了的  -- 不用会报错 ，下面参数获取不到原来的值了
//把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
import { withRouter} from 'react-router-dom';
import {
        DetaillWrapper,
        Headers,
        Content,
    } from './style';
class Detaill extends PureComponent {

    render() {
        //  获取 URL中的 id值    reuslt风格  （a/参数/参数）
        // console.log(this.props.match.params.id)
        //  获取 URL中的 id值    ？传参 （a/？id=1&a=2）
        console.log(this.props.location.search.split("?id=")[1])
        const {title, content } = this.props;
        return (    
            <DetaillWrapper>
                <Headers>{title}</Headers>
                <Content
                    dangerouslySetInnerHTML = { { __html: content }}
                />  
            </DetaillWrapper>
        )
    }

    componentDidMount() {
        // this.props.gitDetaill(this.props.match.params.id);
        this.props.gitDetaill( this.props.location.search.split("?id=")[1])       
    }

}
// //获取数据
const mapState = (state) => {
    return {
        title: state.getIn(['detaill','title']),
        content: state.getIn(['detaill','content']),
    }
}


//传输数据
const mapDispatch = (dispatch) => {
    return {
        gitDetaill(id){
            dispatch(actionCreators.getDetaill(id));
      },
    }
}
//让 Detaill 有能力获取到 withRouter里的参数跟内容
export default connect(mapState,mapDispatch)(withRouter(Detaill));
// export default connect(mapState,mapDispatch)(Detaill);