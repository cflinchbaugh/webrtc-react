import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const data = {
            id: props.id,
            onClick: props.handleClickButton
        }

    return (
        <button {...data}>
            {props.label}
        </button>
    )
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleClickButton: PropTypes.func.isRequired
}

export default Button;