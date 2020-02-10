import {action, observable} from 'mobx';

class Todo {
    constructor(name) {
        this.name = name;
    }

    @observable name = '';
    @observable done = false;

    @action
    toggleDone = () => {
        this.done = !this.done;
    }
}

export default Todo;
