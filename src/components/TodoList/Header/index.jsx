import { connect } from 'react-redux';
import Presentation from './Presentation';
import {
    getCountCheckedTasks,
    getCountTotalTasks
} from 'components/TodoList/redux';

export default connect(
    state => ({
        checkedTasks: getCountCheckedTasks( state ),
        totalTasks: getCountTotalTasks( state )
    })
)( Presentation );