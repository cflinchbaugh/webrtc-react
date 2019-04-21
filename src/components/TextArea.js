import React from 'react';
import PropTypes from 'prop-types';

function TextArea(props) {
    const data = {
            id: props.id,
            value: props.value,
            onChange: (e) => {props.handleChangeValue(e.currentTarget.value)}
        }

    return <textarea {...data}/>
}

TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChangeValue: PropTypes.func.isRequired
}

export default TextArea;