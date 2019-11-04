import React from 'react';
import { Provider } from "react-redux";
import { mount } from 'enzyme';
import TodoList from 'components/TodoList';
import store from 'store';

describe('TodoList rendering tests', () => {
    it ('should render', done => {
        const wrapper = mount(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );

        expect( wrapper.exists() ).toBeTruthy();

        done();
    });
});