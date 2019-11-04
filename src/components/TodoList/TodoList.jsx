import React, { Component } from 'react';
import 'stylesheets/components/TodoList/TodoList.scss';

import Header from './Header';
import Task from './Task';

export default class TodoList extends Component {

    render() {
        const {
            title,
            list,
            addTask
        } = this.props;

        return (
            <>
                <Header title={title} />
                <div className='TodoList__tasks'>
                    {list.sortBy(task => task.get('order')).keySeq().map( taskKey => (
                        <Task key={taskKey} taskKey={taskKey} />
                    ))}
                    <button
                        onClick={addTask}
                        className='TodoList__add icon-plus-circled'
                    >
                        Adicionar tarefa
                    </button>
                </div>
            </>
        );
    }
}