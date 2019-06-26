//统一的action 让页面不在杂乱

// import {SEARCH_IINPUT_BLUR, SEARCH_INPUT_FOCUS} from '../constants/actionType'
import * as constants from '../constants/actionType'
// 引入 ajax
import axios from 'axios';

//内部用 不导出
const changeLogin = () => ({//返回数据结构(对象)
    type: constants.CHANGE_LOGIN,//返回类型
    value: true
});



/**
 * 使用了 thunk 中间件之后  可以变成  函数
 */
//hOME的数据
export const login = (id) => {
    return (dispatch) => {
        axios.get('/api/login.json')
            .then((res) => {
                const results = res.data.data;
                // console.log(results)
                if(results){
                    dispatch(changeLogin());
                }else{
                    alert("登录失败")
                }
            })
            .catch(() => {
                console.log("loginError")
            })
    }
}; 



//退出
export const logOut =() => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})
