import React from 'react';
import Loadable from 'react-loadable';

//异步加载组件
const LoadableComponent = Loadable({
    // 需要异步加载的组件      这里是当前Detaill组件
  loader: () => import('./'),
  //页面加载需要时间，这里的内容是在这个加载的时间段里给用户看的东西
  loading(){
    //   这个可以是个公用 页面加载的组件
      return  <div>页面正在加载</div>
  }
});

//直接写个无状态组件 更方便
export default () =>  <LoadableComponent/>

// 官方例子
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }