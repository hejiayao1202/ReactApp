import React, { Component } from 'react';
import { NavBar,Icon,Carousel,Grid,WhiteSpace,SearchBar,WingBlank} from 'antd-mobile';

// 宫格
const array=[
    {url:require("../img/xs1.jpg"),text:"桌"},
    {url:require("../img/xs2.jpg"),text:"床"},
    {url:require("../img/xs3.jpg"),text:"椅"},
    {url:require("../img/xs4.jpg"),text:"几"},
    {url:require("../img/xs5.jpg"),text:"柜"},
    {url:require("../img/xs6.jpg"),text:"书架"},
    {url:require("../img/xs7.jpg"),text:"沙发"},
    {url:require("../img/xs8.jpg"),text:"家居饰品"},
    {url:require("../img/xs9.jpg"),text:"户外家具"},
    {url:require("../img/xs10.jpg"),text:"全部分类"}];
const data = array.map((item) => ({
    // icon: <i style={{fontSize:30}} className={`iconfont ${item.url}`}></i>,
    icon:item.url,
    text: item.text,
  }));
const GridExample = () => (
    <div>
      {/* <Grid data={data} columnNum={5} hasLine={false} /> */}
      <Grid data={data}
      columnNum={5}
      hasLine={false}
      renderItem={dataItem => (
        <div>
          <img src={dataItem.icon} style={{ width: '35px', height: '35px' }} />
          <div style={{ color: '#000', fontSize: '14px' }}>
            <span>{dataItem.text}</span>
          </div>
        </div>
      )}
    />
    </div>
)

// 商品
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} buy_placeholder1`} {...restProps}>
        <img style={{width:"165px",height:"120px"}} src={require('../img/cup.jpg')}/>
        <p style={{fontSize:"11.5px",margin:"8px 0"}}>Top Art Studio 欧式风格精细…</p>
        <p style={{fontSize:"11.5px",margin:"8px 0"}}>¥ 39.95</p>
    </div>
  );
const PlaceHolder2 = ({ className = '', ...restProps }) => (
    <div className={`${className} buy_placeholder2`} {...restProps}>
        <img style={{width:"165px",height:"120px"}} src={require('../img/clock.jpg')}/>
        <p style={{fontSize:"11.5px",margin:"8px 0"}}>顺顺工艺欧式风格塑料外框黑…</p>
        <p style={{fontSize:"11.5px",margin:"8px 0"}}>¥ 83.99</p>
    </div>
  );
const PlaceHolder3 = ({ className = '', ...restProps }) => (
    <div className={`${className} buy_placeholder3`} {...restProps}>
        <img style={{width:"345px",height:"200px"}} src={require('../img/buy_bottom.jpg')}/>
    </div>
  );
  

export default class Buy extends Component{
    // 搜索框
    constructor(){
        super();
        this.state = {
            value: '',
        };
    }
    onChange= (value) => {
        this.setState({ value });
    };


    render(){
        return(
            <div>
                {/* 头部 */}
                <NavBar
                    style={{background:'#3fcccb',color:"#fff"}}
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')} 这是返回键头
                    rightContent={[//右边的内容
                        // <Icon key="0" type={'iconlinggan'} style={{ marginRight: '16px' }} />
                        <i style={{fontSize:16}} className="iconfont icongouwuche"></i>
                    ]}
                >商城</NavBar>

                {/* 轮播图 */}
                <Carousel
                    autoplay={true}//自动播放
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotActiveStyle={{background:"#3fcccb"}}
                >
                    {[1,2,3,4].map(val => (
                        <a
                        key={val}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                        <img
                            src={require(`../img/2_${val}.jpg`)}
                            alt=""
                            style={{ width: '100%', height:200,verticalAlign: 'top' }}//width: '100%' 没有这个就会超出去
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            }}
                        />
                        </a>
                    ))}
                </Carousel>

                {/* 搜索框 */}
                <WingBlank style={{lineHeight:"44px",width:"360px",marginLeft:"10px",position:"absolute",top:"45px"}}>
                    <i style={{fontSize:22,float:"left",color:"white"}} className="iconfont iconfenlei"></i>
                <SearchBar
                    placeholder="输入关键字搜索"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    onChange={this.onChange}
                    style={{background:"none",opacity:"0.8"}}
                />
                </WingBlank>

                {/* 宫格 */}
                <GridExample />

                {/* 商品 */}
                <WhiteSpace size="lg" />
                <WingBlank style={{height:"160px"}}>
                    <PlaceHolder />
                    <PlaceHolder2 />
                </WingBlank>

                <WhiteSpace size="lg" />
                <WingBlank style={{width:"350px",height:"200px"}}>
                <PlaceHolder3 />
                </WingBlank>

            </div>
        )
    }
}