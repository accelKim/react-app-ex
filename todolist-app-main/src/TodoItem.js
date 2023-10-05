import PropTypes from 'prop-types';
 
function TodoItem({text}) {
    return (
        <p>{text}</p>
    )
}

TodoItem.propTypes = {
    text: PropTypes.string
} 

export default TodoItem;