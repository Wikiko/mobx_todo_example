import {action, computed, observable} from 'mobx';
import React from "react";

class TodoStore {
    @observable todos = [];

    @action
    addTodo(newTodo) {
        this.todos.push(newTodo);
    }

    @computed
    get getUnDoneTodosCount() {
        return this.todos.filter(todo => !todo.done).length;
    }

    @computed
    get getDoneTodosCount(){
        return this.todos.filter(todo => todo.done).length;
    }

}

export default new TodoStore();
