import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import All from './All'
import Jinghua from './Jinghua'
import Fenxiang from './Fenxiang'
import Ask from './Ask'
import Zhaopin from './Zhaopin'
import Ceshi from './Ceshi'


export default class Home extends Component{
    render(){
        let {url}=this.props.match;
        // console.log(this.props.match.url); /home
        return(
            <div>
                <div className="homeHeader">
                    <Link className="homeLink" to={`${url}/all`}>全部</Link>
                    <Link className="homeLink" to={`${url}/jinghua`}>精华</Link>
                    <Link className="homeLink" to={`${url}/fenxiang`}>分享</Link>
                    <Link className="homeLink" to={`${url}/ask`}>问答</Link>
                    <Link className="homeLink" to={`${url}/zhaopin`}>招聘</Link>
                    <Link className="homeLink" to={`${url}/ceshi`}>客户端测试</Link>
                </div>
                <div>
                    {/* 
                    头像 置顶/问答可以不写 数据 title  后边头像日期写死
                    分页写死 写10个  每一个title能调到详情
                     */}
                    <Route path={url+'/all'} component={All}/>
                    <Route path={url+'/jinghua'} component={Jinghua}/>
                    <Route path={url+'/fenxiang'} component={Fenxiang}/>
                    <Route path={url+'/ask'} component={Ask}/>
                    <Route path={url+'/zhaopin'} component={Zhaopin}/>
                    <Route path={url+'/ceshi'} component={Ceshi}/>
                </div>
            </div>
        )
    }
}