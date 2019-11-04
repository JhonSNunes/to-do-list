import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from 'components/ProgressBar';

describe('ProgressBar rendering tests', () => {
    it ('should render', () => {
        const wrapper = shallow(
            <ProgressBar />
        );

        expect( wrapper.exists() ).toBeTruthy();
    });
});