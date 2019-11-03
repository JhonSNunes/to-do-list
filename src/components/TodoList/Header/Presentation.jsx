import React from 'react';
import ProgressBar from "components/ProgressBar";
import 'stylesheets/components/TodoList/Header.scss';

export default ({ title, checkedTasks, totalTasks }) => (
    <div className='Header'>
        <div className='Header__title'>
            <div className='Header__title__text icon-list'>{title}</div>
            <div className='Header__title__totalChecked'>{`${checkedTasks} / ${totalTasks}`}</div>
        </div>
        <div style={{padding: 10}}>
            <ProgressBar percentage={checkedTasks / totalTasks * 100 || 0} />
        </div>
    </div>
);