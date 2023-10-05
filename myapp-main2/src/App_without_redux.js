import { useState } from 'react';
import './App.css';
import Button from './Button_without_redux';
function App_without_redux() {
  return (
    <Parent />
  )
}

function Parent(props) {
  const [color, setColor] = useState("white");
  const style = {
    backgroundColor : color
  }
  console.log("parent : ", props)
  return(
    <div>
      <RedContainer setColor={setColor} style={style} />
      <GreenContainer setColor={setColor}  style={style}/>
      <BlueContainer setColor={setColor}  style={style}/>
      <PurpleContainer setColor={setColor}  style={style}/>
    </div> 
  )
}

function RedContainer(props){
  console.log(props)
  const onClick = () => {
    props.setColor("red");
  }
  return (
    <div className="container" style= {props.style}>
      <Button text = "red" onClick={onClick} />
    </div>
  );
}

function GreenContainer(props){
  console.log(props)
  const onClick = () => {
    props.setColor("green");
  }
  return (
    <div className="container" style= {props.style}>
      <Button text = "green" onClick={onClick} />
    </div>
  );
}

function BlueContainer(props){
  console.log(props)
  const onClick = () => {
    props.setColor("blue");
  }
  return (
    <div className="container" style= {props.style}>
      <Button text = "blue" onClick={onClick} />
    </div>
  );
}

function PurpleContainer(props){
  console.log(props)
  const onClick = () => {
    props.setColor("purple");
  }
  return (
    <div className="container" style= {props.style}>
      <Button text = "purple" onClick={onClick} />
    </div>
  );
}

export default App_without_redux;
