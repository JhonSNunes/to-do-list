import React from 'react';
import TodoList from 'components/TodoList';
import { Provider } from "react-redux";
import store from 'store';
import 'stylesheets/fontello/css/to-do-list.css';
import 'stylesheets/containers/ListContainer.scss';

export default () => (
    <Provider store={store}>
        <div className='ListContainer'>
            <div className='ListPanel'>
                <TodoList title='Todo list' />
            </div>
        </div>
    </Provider>
);