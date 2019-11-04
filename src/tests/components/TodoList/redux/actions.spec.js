import * as actions from 'components/TodoList/redux/actions';
import * as constants from 'components/TodoList/redux/constants';

describe('TodoList/redux/actions tests', () => {
    const taskKey = '_1imdison345';

    it ('should add task', () => {
        expect( actions.addTask() ).toEqual({
            type: constants.ADD
        });
    });

    it ('should remove task', () => {
        expect( actions.removeTask( taskKey ) ).toEqual({
            type: constants.REMOVE,
            taskKey
        });
    });

    it ('should handle check task', () => {
        const checked = true;

        expect( actions.handleCheckTask( taskKey, checked ) ).toEqual({
            type: constants.CHECK,
            taskKey,
            checked
        });
    });

    it ('should handle description', () => {
        const description = 'This is a task description';

        expect( actions.handleDescription( taskKey, description ) ).toEqual({
            type: constants.DESCRIPTION,
            taskKey,
            description
        });
    });
});