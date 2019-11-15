import React, { Component } from 'react';
import { NavBar,Icon,Tabs,WingBlank} from 'antd-mobile';

// 小导航 
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '第七个' },
    { title: '第八个' }
  ];

// 推荐内容
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} lg_placeholder`} {...restProps}>
        {/* 左边 */}
        <div style={{background:"#fff",margin:"15px",width:"157px",height:"200px",float:"left",borderRadius:"5px"}}>
            <div style={{width:"157px",height:"155px"}}>
                <img style={{width:"157px",height:"155px"}} src={require("../img/lg_img1.jpg")}/>
            </div>
            <div style={{width:"157px",height:"45px",padding:"0 5px",position:"relative"}}>
                <img src={require('../img/touxiang1.jpg')} style={{width:"36px",height:"36px",borderRadius:"18px",position:"absolute",top:"-10px"}}/>
                <span style={{color:"#757575",fontSize:15,marginLeft:"40px",position:"absolute",top:"10px"}}>橙色律动</span>
                <i className="iconfont iconxin" style={{fontSize:18,color:"#d9032b",position:"absolute",top:"10px",right:"5px"}}></i>
            </div>
        </div>
        {/* 右边 */}
        <div style={{background:"#fff",margin:"15px",width:"157px",height:"200px",float:"right",borderRadius:"5px"}}>
            <div style={{width:"157px",height:"155px"}}>
                <img style={{width:"157px",height:"155px"}} src={require("../img/lg_img2.jpg")}/>
            </div>
            <div style={{width:"157px",height:"45px",padding:"0 5px",position:"relative"}}>
                <img src={require('../img/touxiang2.jpg')} style={{width:"36px",height:"36px",borderRadius:"18px",position:"absolute",top:"-10px"}}/>
                <span style={{color:"#757575",fontSize:15,marginLeft:"40px",position:"absolute",top:"10px"}}>儿童房</span>
                <i className="iconfont iconxin" style={{fontSize:18,color:"#d9032b",position:"absolute",top:"10px",right:"5px"}}></i>
            </div>
        </div>
    </div>
  );

export default class Linggan extends Component{
    render(){
        return(
            <div>
                {/* 头部 */}
                <NavBar
                    style={{background:'#3fcccb',color:"#fff",position:"relative"}}
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')} 这是返回键头
                    rightContent={[//右边的内容
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                >灵感</NavBar>

                {/* <i className="iconfont iconadd-fill"}></i> */}

                {/* 小导航 */}
                <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                tabBarUnderlineStyle={{border:"none"}}
                tabBarActiveTextColor="#3fcccb"
                >
                <div style={{height: '800px', backgroundColor: 'eeeeee' }}>
                    {/* 推荐 */}
                    <PlaceHolder/>
                    <PlaceHolder/>
                    <PlaceHolder/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: 'eeeeee' }}>
                    冬季
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: 'eeeeee' }}>
                    宜家
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: 'eeeeee' }}>
                    小清新
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: 'eeeeee' }}>
                    小户型
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: 'eeeeee' }}>
                    个性色彩
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: 'eeeeee' }}>
                    第七个
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: 'eeeeee' }}>
                    第八个
                </div>
                </Tabs>

            </div>
        )
    }
}