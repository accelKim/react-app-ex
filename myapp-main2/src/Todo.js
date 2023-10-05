import ACTION_TYPES from './ACTION_TYPES';

const Todo = ({todo,
                dispatch, id , isFinished
}) => {
    return (
        <div>
            <span style={
                {textDecoration : isFinished ? 'line-through' : 'none',
                 color : isFinished ? 'gray' : 'black'
                }
            }
            onClick = {() => 
                dispatch({type:ACTION_TYPES.finish, payload : {id}})
            }
            >{todo}</span>
            <button onClick={() =>
                dispatch({type:ACTION_TYPES.del , payload : {id}})
            }>삭제</button>
        </div>
    )
}
export default Todo;