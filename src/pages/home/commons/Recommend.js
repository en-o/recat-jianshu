import React,{PureComponent} from 'react';

import {RecommendWrapper, RecommendItem} from '../style';
import { connect } from 'react-redux';


// PureComponent 提升组件性能
class Recommend extends PureComponent {

    render() {
        const { recommendList } = this.props;
        return (    
            <RecommendWrapper>
                {
                    recommendList.map((item) => {
                        return (
                            <RecommendItem 
                                key = { item.get('id') }
                                imgUrl={ item.get('imgURL') } 
                            />
                        )
                    })
                }
            </RecommendWrapper>
        )
    }

}


//获取数据   // focused 主要是用来聚焦跟失焦
const mapStateToProps = (state) =>{   
    return {
        recommendList: state.getIn(['home','recommendList']),//焦点状态
    }
}

//传出数据
const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recommend);