import React, { Component } from 'react';
import Todoitem from './Todoitem';
import "./Todolist.css"

export default class Thelist extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="list">
                <h2 className="list-title">
                {this.props.title}
                    <span className="todo-num">
                        {this.props.todo.list.filter(item => {
                            return item.status === this.props.status
                        }).length}
                    </span>    
                </h2>
                <div>
                {
                    this.props.todo.list.filter(item => {
                        return item.status === this.props.status
                    }).map(item => {
                        return <Todoitem item={item} toChangeStatus={this.props.finish} toBackStatus={this.props.add} key={item.id} clickDelete={this.props.deleted}/>
                    })
                }
                </div>
            </div>
        )
    }
}