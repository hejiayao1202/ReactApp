import React, { Component } from 'react'

export default class Chapter extends Component {
    constructor(){
        super();
        this.state = {
            detail:"",
            title:"",
            time:""
        }
    }
    componentDidMount(){
        // console.log(this.props);
        // this.props.match.params.id与路径有关
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.match.params.id)
        .then(res=>res.json())
        .then(res=>{
            // console.log(res.data);
            this.setState({
                detail:res.data.content,
                title:res.data.title,
                time:res.data.create_at
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.time.slice(0,10)}</p>
                <div dangerouslySetInnerHTML = {{ __html: this.state.detail}}></div>
            </div>
        )
    }
}
