import React,{PureComponent} from 'react';
import {Provider} from 'react-redux';
// 全局样式  利用 styled css样式管理器写的
import {Globalstyle} from './style.js';
import {Iconfont} from './statics/iconfont/iconfont.js';
//header 组件 
import Header from './common/header/index';
import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';


//page
import Home from './pages/home';
import Detaill from './pages/detaill';

//PureComponent 提升组件性能
class App extends PureComponent {

    render() {
      return (
        //   store 里面有公共数据
        <Provider store = { store }>
          
            {/* //css全局样式 */}
            <Globalstyle/>
              {/* 全局图标样式 */}
              <Iconfont />
              {/* //css全局样式 */} 
              {/*BrowserRouter  路由 */}
              <BrowserRouter> 
                {/* Link 页面跳转标签 必须在 BrowserRouter 路由标签里面才能用  */}
                <div>
                   {/* 头部样式 */}
                  <Header />
                  {/* exact 表示  访问路径 完全跟 path里的相等才会显示相关路径的内容 */}
                  <Route path = '/' exact component={Home} ></Route>
                  {/* <Route path = '/' exact render={() => <div>Home</div>} ></Route> */}
                    {/* Route 路由规则  */}
                  <Route path = '/detaill' exact component = { Detaill } ></Route>
              
                </div>
              </BrowserRouter>
      
        </Provider>
        );
    }

}

export default App;
