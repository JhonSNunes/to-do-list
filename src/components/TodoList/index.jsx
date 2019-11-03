import { connect } from 'react-redux';
import TodoList from './TodoList';
import {
    getList,
    addTask
} from './redux';

export default connect(
    state => ({
        list: getList( state )
    }),
    { addTask }
)( TodoList );