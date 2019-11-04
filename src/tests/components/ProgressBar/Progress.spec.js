import React from 'react';
import { shallow } from 'enzyme';
import Progress from 'components/ProgressBar/Progress';

describe('Progress rendering tests', () => {
    it ('should render', () => {
        const wrapper = shallow(
            <Progress />
        );

        expect( wrapper.exists() ).toBeTruthy();
    });
});