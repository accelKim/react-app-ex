import PropTypes from 'prop-types';
import './Button.css';

function Button({onClick}) {
    return (
        <button className='btn'
        onClick={onClick}>
            Click
        </button>
    );
  }
  
  Button.propTypes = {
    onClick : PropTypes.func
  }
  export default Button;