//统一的action 让页面不在杂乱

// import {SEARCH_IINPUT_BLUR, SEARCH_INPUT_FOCUS} from '../constants/actionType'
import * as constants from '../constants/actionType'
// 引入 ajax
import axios from 'axios';
// 引入 immutable
import {fromJS} from 'immutable'

//内部用 不导出
const changeDetaill = (results) => ({//返回数据结构(对象)
    type: constants.CHANGE_DETAILL_DATA,//返回类型
    title: fromJS(results.title),//返回数据
    content: fromJS(results.content),//返回数据
});



/**
 * 使用了 thunk 中间件之后  可以变成  函数
 */
//hOME的数据
export const getDetaill = (id) => {
    return (dispatch) => {
        axios.get('/api/detaill.json?id='+id)
            .then((res) => {
                const results = res.data.data;
                // console.log(results)
                dispatch(changeDetaill(results));
            })
            .catch(() => {
                console.log("detaillerror")
            })
    }
}; 



// //设置回到顶部的显示状态
// export const toggleTopShow =(show) => ({
//     type: constants.TOGGLE_SHOW_TOP,
//     show  
// })
