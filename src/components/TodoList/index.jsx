import React, { Component } from 'react';
import ProgressBar from "components/ProgressBar";
import 'stylesheets/components/TodoList/TodoList.scss';

import Task from './Task';

export default class TodoList extends Component {
    state = {
        todoList: []
    };

    handleAddTodoList = () => {
        const {
            todoList
        } = this.state;

        todoList.push({
            checked: false,
            description: ''
        });

        this.setState({ todoList });
    };

    handleCheckTask = taskKey => {
        const {
            todoList
        } = this.state;

        todoList[taskKey].checked = !todoList[taskKey].checked;

        this.setState({ todoList });
    }

    handleChangeText = ( taskKey, event ) => {
        const {
            todoList
        } = this.state;

        todoList[taskKey].description = event.target.value;

        this.setState({ todoList });
    }

    onDeleteTask = taskKey => {
        const {
            todoList
        } = this.state;

        this.setState({ todoList: todoList.filter( ( task, key ) => key !== taskKey ) });
    }

    render() {
        const {
            title
        } = this.props;
        const {
            todoList
        } = this.state;

        return (
            <div className='TodoList'>
                <div className='icon-list'>{title}</div>
                <div style={{padding: 10}}>
                    <ProgressBar percentage={(todoList.filter( el => el.checked ).length / todoList.length) * 100 || 0} />
                </div>
                <div style={{padding: 10}}>
                    {todoList.map( ( task, taskKey ) => (
                        <Task
                            key={taskKey}
                            checked={task.checked}
                            description={task.description}
                            onChangeCheckbox={this.handleCheckTask.bind(this, taskKey)}
                            onChangeText={this.handleChangeText.bind(this, taskKey)}
                            onDelete={this.onDeleteTask.bind(this, taskKey)}
                        />
                    ))}
                </div>
                <a
                    href={'#'}
                    onClick={this.handleAddTodoList}
                    className='TodoList__add icon-list-add'
                >
                    Adicionar item
                </a>
            </div>
        );
    }
}