import React from 'react';
import { shallow } from 'enzyme';
import Input from 'components/Input';

describe('Todo list indexer rendering tests', () => {
    it ('should render', () => {
        const wrapper = shallow(
            <Input />
        );

        expect( wrapper.exists() ).toBeTruthy();
    });
});