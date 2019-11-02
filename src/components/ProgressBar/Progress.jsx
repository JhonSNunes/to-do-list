import React from 'react';
import { modifier, defineModifiers } from 'utils/modifiers';
import 'stylesheets/components/ProgressBar/Progress.scss';

export default ({ percentage }) => (
    <div
        className={modifier('Progress', defineModifiers({ filled: percentage === 100 }))}
        style={{ width: `${percentage}%` }}
    />
)