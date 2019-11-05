import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Ask extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            linum:[1,2,3,4,5,6,7,8,9,10]
        }
    }

    // 发请求
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/?tab=ask')
        .then(res=>res.json())
        .then(res=>{
            // console.log(res.data);
            res.data.map((item)=>{
                // console.log(item);//是每一项
                this.setState({
                    data:res.data
                })
            })
        })
    }

    Page=(page)=>{
        fetch("https://cnodejs.org/api/v1/topics/?tab=ask&page="+page)
        .then(res=>res.json())
        .then(res=>{
            res.data.map((item)=>{
                this.setState({
                    data:res.data
                })
            })
        })
    }
    
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.data.map((item,idx)=>
                            <li className="allLi" key={idx}>
                                <img className="allImg" src={item.author.avatar_url}/>
                                <span className="allSpan">{item.reply_count}/{item.visit_count}</span>
                                <Link to={'/topic/'+item.id} className="allTitle">{item.title}</Link>
                                {/* 把Route写到App.js里 */}
                                <span className="allTime">
                                    <img className="allImgtwo" src={item.author.avatar_url}/>
                                    {item.last_reply_at.slice(0,10)}
                                </span>
                            </li>
                        )
                    }
                </ul>
                <div>
                    <ul className="allPages" >
                       {
                            this.state.linum.map((item)=>{
                                // 注意bind
                                return <li key={item} onClick={this.Page.bind(this,item)}>{item}</li>
                            })
                       }
                    </ul>
                </div>
            </div>
        )
    }    
}