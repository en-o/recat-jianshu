/*拆分 reducer 每个组件下建立一个 reducer 在 在这里集成到一起 */

//引入 redux
// combineReducers 可以把小的 reducer 整合成一个
// import {combineReducers} from 'redux';
//  使用 redux-immutable 让 reducer也变成 一个 immutable 对象数
// 把 js对象数据 转化为 immutable 对象数据 （不可改变对象）  第一步
import {combineReducers} from 'redux-immutable';


//头部数据 的 reducer    store是一个出口 里面有很多的路径映射   headerReducer是其中一个
import {headerReducer} from '../common/header/store';
import {homeReducer} from '../pages/home/store';
import {detaillReducer} from '../pages/detaill/store';
import {loginReducer} from '../pages/login/store';
const reducer= combineReducers ({
    header: headerReducer,
    home: homeReducer,
    detaill: detaillReducer,
    login: loginReducer,
})

export default reducer;