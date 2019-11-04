import React from 'react';
import { shallow } from 'enzyme';
import Input from 'components/Input';

describe('Todo list indexer rendering tests', () => {
    let wrapper;

    const onChangeSpy = sinon.spy();

    beforeAll(() => {
        wrapper = shallow(
            <Input
                onChange={onChangeSpy}
            />
        );
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it ('should render', () => {
        expect( wrapper.exists() ).toBeTruthy();
    });

    it ('should handle text', () => {
        const input = wrapper.find('input[type="text"]');
        
        input.simulate('change', {
            target: {
                value: 'Description handler tests'
            }
        });  

        expect( onChangeSpy.calledOnce ).toBeTruthy();
        expect( onChangeSpy.calledWith('Description handler tests') ).toBeTruthy();
    });
});