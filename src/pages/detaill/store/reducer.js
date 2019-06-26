/*数据*/

import { fromJS } from 'immutable';
import {actionTypes} from '../store'

// 把 js对象数据 转化为 immutable 对象数据 （不可改变对象）  第一步
const defaultState = fromJS({
    //immutable 对象
    title:'',
    content:'',
})


export default (state = defaultState,action) => {
    // console.log(action)
    switch(action.type) {
        case actionTypes.CHANGE_DETAILL_DATA:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}