import React from 'react';
import { shallow } from 'enzyme';
import TextView from 'components/TextView';

describe('Todo list indexer rendering tests', () => {
    it ('should render', () => {
        const wrapper = shallow(
            <TextView />
        );

        expect( wrapper.exists() ).toBeTruthy();
    });
});