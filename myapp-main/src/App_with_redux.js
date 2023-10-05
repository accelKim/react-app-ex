import { useState } from 'react';
import './App.css';
import Button from '../../myapp2/src/Button_without_redux';
function App_without_redux() {
  return (
    <div>
      <RedContainer />
      <GreenContainer />
      <BlueContainer />
      <PurpleContainer />
    </div> 
  )
}

function RedContainer(){
  const [color, setColor] = useState("white");
  const onClick = () => {
    setColor("red");
  }
  return (
    <div className="container" style= {{backgroundColor : color}}>
      <Button text = "red" onClick={onClick} />
    </div>
  );
}

function GreenContainer(){
  const [color, setColor] = useState("white");
  const onClick = () => {
    setColor("green");
  }
  return (
    <div className="container" style= {{backgroundColor : color}}>
      <Button text = "green" onClick={onClick} />
    </div>
  );
}

function BlueContainer(){
  const [color, setColor] = useState("white");
  const onClick = () => {
    setColor("blue");
  }
  return (
    <div className="container" style= {{backgroundColor : color}}>
      <Button text = "blue" onClick={onClick} />
    </div>
  );
}

function PurpleContainer(){
  const [color, setColor] = useState("white");
  const onClick = () => {
    setColor("purple");
  }
  return (
    <div className="container" style= {{backgroundColor : color}}>
      <Button text = "purple" onClick={onClick} />
    </div>
  );
}

export default App_without_redux;
