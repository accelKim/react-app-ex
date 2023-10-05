import PropTypes from 'prop-types';
//import TodoItem from './TodoItem';

function TodoContainer({list}) {
    return (
        <div>
            <h3>todo-List</h3>
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            {/* {list.map((item) => <TodoItem text={item} />)} */}
        </div>
    )
}

TodoContainer.propTypes = {
    list: PropTypes.array
}

export default TodoContainer;