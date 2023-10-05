import PropTypes from 'prop-types';

function Input({value, onChange}) {
    return (
        <input type="text" value={value} onChange = {onChange}></input>
    )
}
Input.propTypes = {
    value : PropTypes.string,
    onChange : PropTypes.func
}

export default Input;