import reducer from 'components/TodoList/redux';
import * as constants from 'components/TodoList/redux/constants';

describe('TodoList/redux/reducer', () => {
    let initial = reducer();

    const taskKey = initial.keySeq().first();
    
    it ('should reduce add task', () => {
        expect( initial.size ).toEqual(1);

        const nextState = reducer( initial, { type: constants.ADD } );

        expect( nextState.size ).toEqual(2);
    });

    it ('should reduce remove task', () => {
        expect( initial.size ).toEqual(1);

        const nextState = reducer( initial, { type: constants.REMOVE, taskKey } );

        expect( nextState.size ).toEqual(0);
    });

    it ('should reduce check task', () => {
        expect( initial.get( taskKey ).get('checked') ).toEqual(false);

        const checked = true;
        const nextState = reducer( initial, { type: constants.CHECK, taskKey, checked } );

        expect( nextState.get( taskKey ).get('checked') ).toEqual(checked);
    });

    it ('should reduce task description', () => {
        expect( initial.get( taskKey ).get('description') ).toEqual('');

        const description = 'This is another task description';
        const nextState = reducer( initial, { type: constants.DESCRIPTION, taskKey, description } );

        expect( nextState.get( taskKey ).get('description') ).toEqual(description);
    });
});