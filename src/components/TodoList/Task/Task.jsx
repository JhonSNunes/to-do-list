import React, { useState } from 'react';
import { modifier, defineModifiers } from 'utils/modifiers';
import 'stylesheets/components/TodoList/Task/Task.scss';

import TextView from 'components/TextView';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';

export default props => {
    const {
        taskKey,
        checked,
        description,
        handleCheckTask,
        handleDescription,
        removeTask
    } = props;

    const [renderView, handleViewMode] = useState( true );

    const useViewMode = () => handleViewMode(true);
    const useEditMode = () => handleViewMode(false);

    const handleCheckbox = () => handleCheckTask( taskKey, !checked );
    const handleTaskDescription = event => handleDescription( taskKey, event.target.value );
    const removeTodoTask = () => removeTask( taskKey );

    const renderDescription = () => {
        let inputText = description;

        if ( description === '' ) {
            inputText = 'Clique aqui e digite algo...';
        }

        let component = (
            <TextView text={inputText} />
        );

        if ( !renderView ) {
            component = (
                <Input
                    text={description}
                    onChange={handleTaskDescription}
                    onBlur={useViewMode}
                />
            );
        }
        return component;
    };

    return (
        <div className='Task'>
            <div className='Task__checkbox'>
                <Checkbox
                    checked={checked}
                    onChange={handleCheckbox}
                />
            </div>
            <div className={modifier('Task__manager', defineModifiers({ renderView }))} onClick={useEditMode}>
                <div className={modifier('Task__input', defineModifiers({ renderView, lineThrough: renderView && checked && description !== '' }))}>
                    {renderDescription()}
                    {renderView && <span className={modifier('Task__input__pencil', defineModifiers({ renderView })) + ' icon-pencil'} />}
                </div>
                <a href={'#'} className={modifier('Task__trash', defineModifiers({ editMode: !renderView })) + ' icon-trash'} onClick={removeTodoTask} />
            </div>
        </div>
    );
};