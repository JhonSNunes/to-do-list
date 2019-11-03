const getSlice = state => state;

export const getList = state => state;

const getTask = ( state, taskKey ) => getSlice( state ).get( taskKey );

export const getIsChecked = ( state, taskKey ) => getTask( state, taskKey ).get('checked');
export const getDescription = ( state, taskKey ) => getTask( state, taskKey ).get('description');

export const getCountCheckedTasks = state => state.filter( task => task.get('checked') ).size;
export const getCountTotalTasks = state => getList( state ).size;