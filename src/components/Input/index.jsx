import React from 'react';
import 'stylesheets/components/Input.scss';

export default ({ text, placeholder, onChange, onBlur }) => (
    <div className='Input'>
        <input
            autoFocus
            type='text'
            value={text}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
        />
    </div>
);