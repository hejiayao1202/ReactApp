import React, { Component } from 'react';
import Thelist from './Thelist.js'
import "./Todolist.css"

export default class Bosies extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="bodies">
                <Thelist title="正在进行" todo={this.props.todo} add={this.props.add} finish={this.props.finish} deleted={this.props.deleted} status="working"/>
                <Thelist title="已经完成" todo={this.props.todo} add={this.props.add} finish={this.props.finish} deleted={this.props.deleted} status="finished"/>
            </div>
        )
    }
}