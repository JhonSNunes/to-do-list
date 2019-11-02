import React from 'react';
import 'stylesheets/components/Input.scss';

export default ({ text, placeholder, onChange }) => (
    <div className='Input'>
        <input
            type='text'
            value={text}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
);