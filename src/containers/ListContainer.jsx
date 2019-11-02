import React from 'react';
import TodoList from 'components/TodoList';
import 'stylesheets/fontello/css/to-do-list.css';
import './styles.scss';

export default () => (
    <div className='ListContainer'>
        <div className='ListPanel'>
            <TodoList
                title='Lista de afazeres'
            />
        </div>
    </div>
);