import React from 'react';
import { modifier, defineModifiers } from 'utils/modifiers';

import 'stylesheets/components/Checkbox.scss';

export default ({ checked, onChange }) => (
    <div className={modifier('Checkbox', defineModifiers({ checked }))} onClick={onChange}>
        <input type='checkbox' checked={checked} onChange={onChange} />
        <svg viewBox="0 0 24 24">
            <polyline points="20 6 8 18 4 12" />
        </svg>
    </div>
);