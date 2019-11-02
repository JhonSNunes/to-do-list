import React from 'react';
import Progress from './Progress';
import 'stylesheets/components/ProgressBar/Progress.scss';

export default ({ percentage }) => (
    <div className='ProgressBar'>
        <Progress percentage={percentage} />
    </div>
);