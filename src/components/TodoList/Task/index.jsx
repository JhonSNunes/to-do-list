import { connect } from 'react-redux';
import Task from './Task';
import {
    handleCheckTask,
    handleDescription,
    removeTask,
    getIsChecked,
    getDescription
} from 'components/TodoList/redux'

export default connect(
    ( state, { taskKey } ) => ({
        checked: getIsChecked( state, taskKey ),
        description: getDescription( state, taskKey ),
    }),
    { handleCheckTask, handleDescription, removeTask }
)( Task );