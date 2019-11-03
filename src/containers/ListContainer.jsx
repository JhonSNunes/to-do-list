import React from 'react';
import TodoList from 'components/TodoList';
import TodoListStore from 'components/TodoList/redux';
import { createStore } from "redux";
import { Provider } from "react-redux";

import 'stylesheets/fontello/css/to-do-list.css';
import 'stylesheets/containers/ListContainer.scss';

const store = createStore( TodoListStore );

export default () => (
    <Provider store={store}>
        <div className='ListContainer'>
            <div className='ListPanel'>
                <TodoList title='To do list' />
            </div>
        </div>
    </Provider>
);