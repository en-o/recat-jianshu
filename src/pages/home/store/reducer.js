/*数据*/

import { fromJS } from 'immutable';
import {homeActionType} from '../store'

// 把 js对象数据 转化为 immutable 对象数据 （不可改变对象）  第一步
const defaultState = fromJS({
    //immutable 对象
    articleList:[],
    recommendList: [],
    writerList: [],
    articleListPage:1,
    showScroll: false,
})


export default (state = defaultState,action) => {
    // console.log(action.writerList)
    switch(action.type) {
        case homeActionType.CHANGE_HOMG_DATA:
            return  state.merge({
                articleList: action.articleList,
                recommendList: action.recommendList,
                writerList: action.writerList,
            });
        case homeActionType.ADD_HOMG_LIST:
            // concat 追加
                // return  state.set('articleList',state.get('articleList').concat(action.articleList))
                return state.merge({
                    articleList: state.get('articleList').concat(action.articleList),
                    articleListPage: action.nextPage
                })
        case homeActionType.TOGGLE_SHOW_TOP:
                return  state.set('showScroll',action.show)
       
        default:
            return state;
    }
}