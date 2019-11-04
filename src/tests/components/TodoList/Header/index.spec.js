import React from 'react';
import { Provider } from "react-redux";
import { mount } from 'enzyme';
import Header from 'components/TodoList/Header';
import store from 'store';

describe('TodoList rendering tests', () => {
    it ('should render', done => {
        const wrapper = mount(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        expect( wrapper.exists() ).toBeTruthy();

        done();
    });
});