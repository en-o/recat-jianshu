import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
//路由
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {

    render() {
        const { loginStatus } = this.props;
        if(loginStatus){
            return (    
               <div>写文章页面</div>
            )
        }else{
            //重定向到首页 
            return  <Redirect to='/' />
        }   
    }

}
// //获取数据
const mapState = (state) => {
    return {
        loginStatus: state.getIn(["login","login"])
    }
}


export default connect(mapState,null)(Write);