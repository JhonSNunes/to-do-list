export const modifier = ( className, modifiers ) => (
    modifiers
        .map( modifierProp => `${className}--${modifierProp}` )
        .reduce( ( modified, next ) => `${modified} ${next}`, className )
);

export const defineModifiers = props => Object.keys( props ).filter( prop => (
    typeof props[prop] === 'boolean' && props[prop]
) );