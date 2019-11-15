import React, { Component } from 'react';
import { NavBar,Carousel ,WhiteSpace } from 'antd-mobile';

const img =require('../img/hot.jpg');

const PlaceHolder_head = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_head`} {...restProps}>
        {[1,2,3].map(val => (
            <img
                src={require(`../img/middle${val}.jpg`)}
                alt="" style={{width:"115px",height:"115px",marginLeft:"7px"}}
            />
        ))}
    </div>
  );
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}><span style={{borderLeft:"3px solid #3fcccb",paddingLeft:"10px"}}>热门推荐</span></div>
  );
const PlaceHolder_two = ({ className = '', ...restProps }) => (
    <div style={{background:`url(${img}) no-repeat center center`,backgroundSize:"auto"}} className={`${className} placeholder_two`} {...restProps}><span style={{position:"absolute",bottom:"0"}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</span></div>
  );

export default class Home extends Component{
    render(){
        return(
            <div>
                {/* 头部 */}
                <NavBar
                    style={{background:'#3fcccb',color:"#fff"}}
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')} 这是返回键头
                    // rightContent={[//右边的内容
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >住吧家居</NavBar>

                {/* 轮播图 */}
                <Carousel
                    autoplay={true}//自动播放
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotStyle={{width:"30px",height:"5px",borderRadius:"0",background:"#ededed"}}
                    dotActiveStyle={{width:"30px",height:"5px",borderRadius:"0",background:"#3fcccb"}}
                >
                    {[1,2].map(val => (
                        <a
                        key={val}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                        <img
                            src={require(`../img/${val}.jpg`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}//width: '100%' 没有这个就会超出去
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });//可以根据图片高度自适应
                            }}
                        />
                        </a>
                    ))}
                </Carousel>


                <WhiteSpace />
                <PlaceHolder_head />
                <PlaceHolder />
                <PlaceHolder_two />
                <PlaceHolder_two />
        
        
        </div>
        )
    }
}