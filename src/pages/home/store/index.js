// 对内部文件路劲精简
// 暴露一个主出口就行了

import homeReducer from './reducer';
import * as homeActionCreators from './action/functions/actionCreators';
import * as homeActionType from './action/constants/actionType';

export {homeReducer, homeActionCreators, homeActionType}