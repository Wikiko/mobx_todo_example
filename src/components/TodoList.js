import React, {useState} from 'react';
import {inject, observer} from 'mobx-react';

import TodoView from './TodoView';
import Todo from "../state/Todo";

const TodoList = ({ todoStore }) => {
    const [todoName, setTodoName] = useState();

    function addNewTodo(){
        const newTodo = new Todo(todoName);
        todoStore.addTodo(newTodo);
    }

    function cleanTodoName(){
        setTodoName('');
    }

    function handleEnterDown() {
        addNewTodo();
        cleanTodoName();
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleEnterDown();
        }
    }

    return (
        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <div>
                <input placeholder="O que tem pra fazer?"
                       onChange={event => setTodoName(event.currentTarget.value)}
                       value={todoName}
                       onKeyDown={handleKeyDown}
                />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {todoStore.todos.map(todo => (
                        <TodoView todo={todo}/>
                    ))}
                </div>
                <p>Quantidade faltando finalizar: {todoStore.getUnDoneTodosCount}</p>
                <p>Quantidade finalizados: {todoStore.getDoneTodosCount}</p>
            </div>
        </div>
    );
};

export default inject('todoStore')(observer(TodoList));
