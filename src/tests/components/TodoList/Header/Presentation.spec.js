import React from 'react';
import { shallow } from 'enzyme';
import Presentation from 'components/TodoList/Header/Presentation';

describe('TodoList/Header/Presentation rendering tests', () => {
    it ('should render', done => {
        const wrapper = shallow(
            <Presentation />
        );

        expect( wrapper.exists() ).toBeTruthy();

        done();
    });
});