import React from 'react';
import { observer } from 'mobx-react';

const TodoView = ({ todo }) => (
    <div style={{display: 'flex', flexDirection: 'row'}} onClick={() => todo.toggleDone()}>
        <input type="checkbox" checked={todo.done}/>
        <span>{todo.name}</span>
    </div>
);

export default observer(TodoView);
