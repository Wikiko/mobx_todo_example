import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListView from "./components/TodoList";
import todoStore from "./state/todoStore";
import Todo from "./state/Todo";
import {inject, observer} from "mobx-react";

function App() {
    return <TodoListView/>
}

export default App;
