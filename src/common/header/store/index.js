// 对内部文件路劲精简
// 暴露一个主出口就行了

import headerReducer from './reducer';
import * as actionCreators from './action/functions/actionCreators';
import * as constants from './action/constants/actionType';

export {headerReducer, actionCreators, constants}