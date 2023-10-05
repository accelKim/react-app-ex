import { useState } from 'react';
import {createStore} from 'redux';
import './App.css';
import Button from './Button_without_redux';
import { Provider, useSelector, useDispatch } from 'react-redux'

const initialState = {
  color: 'white',
};


function reducer(state, action) {
  console.log(state);
  if(action.type === "changeColor") {
    return {
      ...state , color:action.payload
     };
  } else {
    return state;
  }
}

let store = createStore(reducer, initialState);
console.log(store.getState());

function App_with_redux() {
  return (
    <div>
      <Provider store = {store}>
      <RedContainer text='red' />
      <GreenContainer text='green' />
      <BlueContainer text='blue'/>
      <PurpleContainer text='purple'/>
      </Provider>
    </div> 
  )
}

function RedContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const onClick = () => {
      dispatch({type : "changeColor", payload :"red"})}
  const style = {
    backgroundColor : changedColor
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick}/>
    </div>
  );
}

function GreenContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const onClick = () => {
      dispatch({type : "changeColor", payload :"green"})}
  const style = {
    backgroundColor : changedColor
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick}/>
    </div>
  );
}

function BlueContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const onClick = () => {
      dispatch({type : "changeColor", payload :"blue"})}
  const style = {
    backgroundColor : changedColor
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick}/>
    </div>
  );
}

function PurpleContainer({text}){
  const dispatch = useDispatch();
  const changedColor = useSelector(state => state.color);
  const onClick = () => {
      dispatch({type : "changeColor", payload :"purple"})}
  const style = {
    backgroundColor : changedColor
  }
  return (
    <div className="container" style= {style}>
      <Button text = {text} onClick={onClick}/>
    </div>
  );
}

export default App_with_redux;
