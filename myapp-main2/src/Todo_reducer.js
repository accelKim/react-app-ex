import ACTION_TYPES from "./ACTION_TYPES";

function Todo_reducer({todo, dispatch}) {
    return(
        <div>
            <span style = {{textDecoration : completed ? 'line-through' : 'none',
                    color : completed ? 'gray' : 'black'
        }}
            onClick={ () => {
                dispatch({type: ACTION_TYPES.completed, payload : {id}})
            }}
        >
            {todo}</span>
            <button onClick={ () =>
                dispatch({type: ACTION_TYPES.del, payload :{id}})
            }>삭제</button>
        </div>
    )
}

export default Todo_reducer;