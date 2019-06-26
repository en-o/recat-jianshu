import React,{PureComponent} from 'react';

import {
    WriterWrapper,
    WriterList,
    WriterTitle,
    WriterSwitch,
    WriterListContent,
    WriterListGuanzhu,
    WriterListContentListInfo,
} from '../style';


import { connect } from 'react-redux';

// PureComponent 提升组件性能
class Writer extends PureComponent {

    render() {
        const { handleChangeWriterInfoPage,writerListData } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch
                        onClick = { () => handleChangeWriterInfoPage(this.spinIcon) }
                    >
                    <span 
                        className="iconfont spin"
                        //当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数 这样就可以动态设置css属性
                        ref = { (icon) => { this.spinIcon = icon} }
                    >&#xe746;</span>
                        换一批 
                    </WriterSwitch>
                </WriterTitle>

                <WriterList>
                
                {
                    writerListData.map((item)=>{
                        return (
                            <div  key= {item.get('id') }>
                                    <WriterListContent >
                       
                                        <img 
                                            src = { item.get('imgUrl') } 
                                            className = 'list-pic'
                                            alt = '图片加载失败'
                                        >
                                        </img>
                                        <WriterListContentListInfo>
                                            <h3 className='list-title'>{ item.get('userName') }</h3>
                                            <p className='list-desc'>{ item.get('intro') }</p>
                                        </WriterListContentListInfo>   
                                            
                                        
                                    </WriterListContent> 
                                    <WriterListGuanzhu>
                                                            
                                             <span 
                                                className="iconfont spin"
                                            // //当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数 这样就可以动态设置css属性
                                            // ref = { (icon) => { this.spinIcon = icon} }
                                            >&#xe600;</span>
                                                关注
                                        </WriterListGuanzhu>
                            </div>
                            
                        )
                        
                    })
                }

                
                
                </WriterList>
            
                
                
            </WriterWrapper>
        )
    }

    componentDidMount() {
        console.log(this.props.writerList)
    }

}




//获取数据   // focused 主要是用来聚焦跟失焦
const mapStateToProps = (state) =>{   
    return {
        writerListData: state.getIn(['home','writerList']),//焦点状态
    }
}

//传出数据
const mapDispatchToProps = (dispatch) => {
    return {

        handleChangeWriterInfoPage(spin) { //更换热门搜索词 
            // spin.style.transform = 'rotate(360deg)';//换一换的动态
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0;
            }
            //动态设置 css样式
            spin.style.transform = 'rotate('+ (originAngle+360) +'deg)'
            // console.log(originAngle);
            // if(page<totalPage){
                // dispatch(actionCreators.gethandleChangeSearchInfoPage(page+1)); //输入框失焦变短
            // }else{
                // dispatch(actionCreators.gethandleChangeSearchInfoPage(1)); //输入框失焦变短
            // }

            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Writer);