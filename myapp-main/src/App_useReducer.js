import { useState , useReducer, useDeferredValue } from 'react';
//

const ACTION_TYPES ={
  up : "up",
  down : "down"
}
const reducer =(state, action) => {
  console.log("reducer가 호출됨",state, action.type, action.payload);
  switch(action.type) {
    case "up" :
      return state + action.payload;
      case "down" :
        return state - action.payload;
        default :
        return state;
  }
}

function App_reducer() {
  const [number, setNumber] =useState(0);
  const [numberTotal, dispatch] = useReducer(reducer, 0)
  const onClick = (e) => setNumber(parseInt(e.target.value));
  return(
    <div>
      <h2>useReducer test</h2>
      <p>숫자 10씩 변경</p>
      <p>현재 숫자 : {numberTotal}</p>
      <input type="number"
      value={number}
      onChange={onClick}
      step={10} />
      <button onClick={()=> {
       dispatch({type :ACTION_TYPES.up, payload : number});
      }
      }>up</button>
      <button onClick={() => {
        dispatch({type :ACTION_TYPES.down, payload : number
      });
      }}>down</button>
    </div>
  )
}
export default App_reducer;
