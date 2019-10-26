// 只认index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
import Todolist from './Todolist_new/Todolist'
import './Todolist_new/Todolist.css'


// 容器组件/UI组件(展示组件)
// 智能组件/木偶组件

// 容器组件(container/pages)：逻辑，功能
// UI组件(components)：展示，返回React元素

// ReactDOM.render(
//     <App/>,
//     document.getElementById("root")
// )


// todolist_work
ReactDOM.render(
    <Todolist/>,
    document.getElementById("root")
)