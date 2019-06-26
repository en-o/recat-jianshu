/*数据*/

// import {SEARCH_IINPUT_BLUR, SEARCH_INPUT_FOCUS} from './action/constants/actionType'
import {constants} from '../store'
import { fromJS } from 'immutable';

//初始化数据
// const defaultState = {
//     focused: false
// };

// 把 js对象数据 转化为 immutable 对象数据 （不可改变对象）  第一步
const defaultState = fromJS({
    focused: false, //聚焦  or 失焦
    mouseIn: false, //鼠标在 热门关键词框 上是 热门关键词框的状态
    SearchInfoListData: [], //热门关键词
    page:1,//起始页
    totalPage: 1,//总页数
})

export default (state = defaultState,action) => {
    switch(action.type) {
        case constants.SEARCH_INPUT_FOCUS://头部输入框 聚焦效果
            return  state.set('focused',true); //  immutable 对象 

        case constants.SEARCH_IINPUT_BLUR://头部输入框 失焦效果
            return  state.set('focused',false); //  immutable 对象 

        case constants.SEARCH_INFO_LIST://头部输入框 聚焦效果
            // return  state.set('SearchInfoListData',action.data).set('totalPage',action.totalPage)
            return  state.merge({
                SearchInfoListData: action.data,
                totalPage: action.totalPage
            })

        case constants.CHANGE_MOUSE_ENTER://鼠标在 热门关键词框 上是 热门关键词框的状态  移入
            return  state.set('mouseIn',true); //  immutable 对象 

        case constants.CHANGE_MOUSE_LEAVE://鼠标在 热门关键词框 上是 热门关键词框的状态  移出
            return  state.set('mouseIn',false); //  immutable 对象  

        case constants.CHANGE_SEARCH_INFO_PAGE://更换 热门搜索词
            return  state.set('page',action.page);
        default:
            return state;
    }
    // if(action.type === constants.SEARCH_INPUT_FOCUS ) {//头部输入框 聚焦效果
    //     // immutable 对象 的 set 方法， 会结合之前  immutable 对象 的值
    //     // 和设置的值， 返回一个全新的对象
    //     return  state.set('focused',true) //  immutable 对象
    //     // return {     
    //     //     // focused: true //js对象
    //     // }
    // }
    // if(action.type === constants.SEARCH_IINPUT_BLUR ) {//头部输入框 失焦效果
    //     return  state.set('focused',false) //  immutable 对象
    //     // return {
    //     //     focused: false //js对象
    //     // }
    // }

    // if(action.type === constants.SEARCH_INFO_LIST ) {//头部输入框 失焦效果
    //     console.log(action.data)
    //     return  state.set('SearchInfoListData',action.data) //  immutable 对象
    // }

    // return state;//返回数据
}