import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import { actionCreators } from './store' ;
//页面跳转
import { Redirect  } from 'react-router-dom';

import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
    } from './style';
class Login extends PureComponent {

    render() {
        const { loginStatus } = this.props;
        if(!loginStatus){
            return (    
                <LoginWrapper> 
                   <LoginBox>
                        <Input placeholder='请输入账户' ref={(input)=>{this.account=input} }/>
                        <Input placeholder='请输入密码' type='password' ref={(input)=>{this.password=input}}/>
                        <Button onClick={() => this.props.login(this.account,this.password)}> 登录 </Button>
                   </LoginBox>
                </LoginWrapper>
            )
        }else{
            //重定向到首页 
            return <Redirect to="/"/>
        }
    }


}
// //获取数据
const mapState = (state) => {
    return {
        loginStatus: state.getIn(['login','login'])
    }
}

//传输数据
const mapDispatch = (dispatch) => {
    return {
        login(accountElemt,passwordElemt){
           dispatch(actionCreators.login(accountElemt.value,passwordElemt.value))
      },
    }
}

export default connect(mapState,mapDispatch)(Login);