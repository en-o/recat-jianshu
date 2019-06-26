// 对内部文件路劲精简
// 暴露一个主出口就行了

import detaillReducer from './reducer';
import * as actionCreators from './action/functions/actionCreators';
import * as actionTypes from './action/constants/actionType';

export {detaillReducer,actionCreators, actionTypes}