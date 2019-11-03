import React, { useRef } from 'react';
import 'stylesheets/components/Input.scss';

export default ({ text, placeholder, onChange, onBlur }) => {
    const inputRef = useRef(null);
    const deleteRef = useRef(null);

    const onBlurEvent = event => {
        event.stopPropagation();

        if ( event.relatedTarget !== deleteRef.current ) {
            return onBlur();
        }
        event.preventDefault();
    }

    const onTextChange = event => onChange( event.target.value );

    const onClickClearInput = () => {
        const input = inputRef.current;
        const event = new Event('input', { bubbles: true });

        input.value = '';

        input.dispatchEvent( event );

        onChange( input.value );

        input.focus();
    };

    return (
        <div className='Input'>
            <input
                autoFocus
                type='text'
                value={text}
                placeholder={placeholder}
                onChange={onTextChange}
                ref={inputRef}
                onBlur={onBlurEvent}
                tabIndex='0'
            />
            <span
                className='Input__deleteAll icon-cancel'
                onClick={onClickClearInput}
                ref={deleteRef}
                tabIndex='1'
            />
        </div>
    );
}; 