import * as constants from './constants';

export const addTask = () => ({
    type: constants.ADD
});

export const removeTask = taskKey => ({
    type: constants.REMOVE,
    taskKey
});

export const handleCheckTask = ( taskKey, checked ) => ({
    type: constants.CHECK,
    taskKey,
    checked
});

export const handleDescription = ( taskKey, description ) => ({
    type: constants.DESCRIPTION,
    taskKey,
    description
});