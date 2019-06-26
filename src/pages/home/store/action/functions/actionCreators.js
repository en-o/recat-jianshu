//统一的action 让页面不在杂乱

// import {SEARCH_IINPUT_BLUR, SEARCH_INPUT_FOCUS} from '../constants/actionType'
import * as constants from '../constants/actionType'
// 引入 ajax
import axios from 'axios';
// 引入 immutable
import {fromJS} from 'immutable'

//内部用 不导出
const changeHomeData = (results) => ({//返回数据结构(对象)
    type: constants.CHANGE_HOMG_DATA,//返回类型
    recommendList: fromJS(results.recommendList),//返回数据
    articleList: fromJS(results.articleList),//返回数据
    writerList: fromJS(results.writerList),//返回数据
});

//内部用 不导出
const addHomeList = (results,page) => ({//返回数据结构(对象)
    type: constants.ADD_HOMG_LIST,//返回类型
    articleList: fromJS(results),//返回数据
    nextPage: page
});





/**
 * 使用了 thunk 中间件之后  可以变成  函数
 */
//hOME的数据
export const getHomeInfoList = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const results = res.data.data;
                // console.log(results)
                dispatch(changeHomeData(results));
                // console.log(data);
            })
            .catch(() => {
                console.log("error")
            })
    }
}; 
/* 使用了 thunk 中间件之后  可以变成  函数
*/
//hOME的数据
export const getMoreList = (page) => {
   return (dispatch) => {
       axios.get('/api/homeList.json?page=' + page)
           .then((res) => {
               const results = res.data.data;
               dispatch(addHomeList(results,page+1));
               // console.log(data);
           })
           .catch(() => {
               console.log("error")
           })
   }
};


//设置回到顶部的显示状态
export const toggleTopShow =(show) => ({
    type: constants.TOGGLE_SHOW_TOP,
    show  
})
