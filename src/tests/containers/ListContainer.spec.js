import React from 'react';
import { shallow } from 'enzyme';
import ListContainer from 'containers/ListContainer';

describe('ListContainer rendering tests', () => {
    it ('should render', () => {
        const wrapper = shallow(
            <ListContainer />
        );

        expect( wrapper.exists() ).toBeTruthy();
    });
});