/*数据*/

import { fromJS } from 'immutable';
import {actionTypes} from '../store'

// 把 js对象数据 转化为 immutable 对象数据 （不可改变对象）  第一步
const defaultState = fromJS({
    //immutable 对象
    login: false,
})


export default (state = defaultState,action) => {
    // console.log(action)
    switch(action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('login',action.value)

        case actionTypes.CHANGE_LOGOUT:
            return state.set('login',action.value)
            
        default:
            return state;
    }
}