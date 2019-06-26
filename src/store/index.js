// 创建 store （提供数据）实例
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//引入数据
import reducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // 指定扩展的选项，如名称，actionsBlacklist, actionsCreators, serialize…
    }) : compose;

    //中间件
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // 其他存储增强器(如果有的话)
);

const store = createStore (reducer,enhancer);

export default store;