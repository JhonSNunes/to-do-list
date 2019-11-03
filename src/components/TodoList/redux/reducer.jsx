import { Map, fromJS } from 'immutable';
import * as constants from './constants';

const initial = Map({});
const initialTask = fromJS({
    checked: false,
    description: '',
    order: 1
});

const generateId = list => {
    const id = '_' + Math.random().toString(36).substr(2, 9);

    if ( list.has( id ) ) {
        return generateId( list );
    }
    return id;
};

export default ( store = initial, action = {} ) => {
    const {
        taskKey
    } = action;

    switch ( action.type ) {
        case constants.ADD:
            const nextOrder = store.reduce(( order, task ) => Math.max( order, task.get('order') ), 0) + 1;

            return store.setIn( [ generateId( store ) ], initialTask.set('order', nextOrder) );

        case constants.REMOVE:
            return store.remove( taskKey );
        
        case constants.CHECK:
            return store.setIn( [ taskKey, 'checked'], action.checked );
        
        case constants.DESCRIPTION:
            return store.setIn( [ taskKey, 'description'], action.description );

        default:
            return store;
    }
};