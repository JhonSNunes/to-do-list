import React from 'react';
import 'stylesheets/components/TodoList/Task/Task.scss';

import TextView from 'components/TextView';
import Input from 'components/Input';

export default ({ taskKey, checked, description, onChangeCheckbox, onChangeText, onDelete }) => (
    <div className='Task'>
        <input type='checkbox' checked={checked} onChange={onChangeCheckbox} />
        <Input
            text={description}
            onChange={onChangeText}
            placeholder='Clique aqui e digite algo...'
        />
        <a href={'#'} className={'Task__trash icon-trash'} onClick={onDelete} />
    </div>
);