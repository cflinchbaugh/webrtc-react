import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const data = {
            id: props.id,
            disabled: props.disabled,
            onClick: props.handleClickButton,
        }

    return (
        <button {...data}>
            {props.label}
        </button>
    )
}

Button.defaultProps = {
    disabled: false
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    handleClickButton: PropTypes.func.isRequired
}

export default Button;