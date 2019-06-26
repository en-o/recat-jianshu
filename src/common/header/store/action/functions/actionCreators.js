//统一的action 让页面不在杂乱

// import {SEARCH_IINPUT_BLUR, SEARCH_INPUT_FOCUS} from '../constants/actionType'
import * as constants from '../constants/actionType'
// 引入 ajax
import axios from 'axios';
// 引入 immutable
import {fromJS} from 'immutable'

//内部用 不导出
const getSearchList = (data) => ({//返回数据结构(对象)
    type: constants.SEARCH_INFO_LIST,//返回类型
    data: fromJS(data),//返回数据
    totalPage: Math.ceil(data.length/10)//返回总页数
});

/**
 *  普通 action 方法
 */

//输入框聚焦变长
export const getInputFocusAction = () => ({//返回数据结构(对象)
    // type: SEARCH_INPUT_FOCUS,//返回类型
    type: constants.SEARCH_INPUT_FOCUS,//返回类型
});

//输入框失焦变短
export const getInputBlurAction = () => ({//返回数据结构(对象)
    type: constants.SEARCH_IINPUT_BLUR,//返回类型
});

//鼠标在 热门关键词框 上是 热门关键词框的状态  移入
export const getChangeMouseEnter = () => ({
    type: constants.CHANGE_MOUSE_ENTER,//返回类型
});

//鼠标在 热门关键词框 上是 热门关键词框的状态  移出
export const getChangeMouseLeave = () => ({
    type: constants.CHANGE_MOUSE_LEAVE,//返回类型
});


//更换热门搜索词
export const gethandleChangeSearchInfoPage = (page) => ({
    type: constants.CHANGE_SEARCH_INFO_PAGE,//返回类型
    page
});


/**
 * 使用了 thunk 中间件之后  可以变成  函数
 */
//输入框聚焦获取 热门搜索词数据
export const getSearchInfoList = () => {
    return (dispatch) => {
        // console.log("123")
        // ajax 
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                // const action = {
                //     type: constants.SEARCH_INFO_LIST,//返回类型
                //     data//返回数据
                // }
                dispatch(getSearchList(data.data));
                // console.log(data);
            })
            .catch(() => {
                console.log("error")
            })
    }
};



