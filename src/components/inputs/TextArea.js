import React from 'react';
import PropTypes from 'prop-types';

function TextArea(props) {
    const data = {
            id: props.id,
            value: props.value,
            disabled: props.disabled,
            onChange: (e) => {props.handleChangeValue(e.currentTarget.value)},
        }

    return <textarea {...data}/>
}

TextArea.defaultProps = {
    disabled: false
}

TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    handleChangeValue: PropTypes.func.isRequired
}

export default TextArea;