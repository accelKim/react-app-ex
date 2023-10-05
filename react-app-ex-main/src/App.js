import {useState , useEffect} from 'react';
import Button from './Button';
import Input from './Input';
import './App.css';
// App1 클래스 컴포넌트를 App 함수형 컴포넌트로 수정하기
// Button 컴포넌트 별도로 만들어서 import
// input props = onChange 를 넘긴다.
// input.js 수정하기
// input 태그에 입력한 값이 변경될때마다 console.log에 이름이 변경되었다라고 출력
function App() {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState("");
  const onClick = () => 
     setCounter(counter + 1);
  const onChange = (e) => 
    setName(name = e.target.value);
  const callOnce = () => {
    console.log("call once only!!!")
  }
  useEffect(callOnce, []); // 생성시에 한번만 호출
  //useEffect(() => console.log("state가 변경됨"), [counter]); // state 변경될때마다 호출
  //useEffect(() => console.log("페이지가 렌더링됨")); // ui 가 render될때마다 호출
  useEffect(() => console.log(`변경됨`), [name, counter]);
  return (
    <div>
      <h1>Functional Component</h1>
      <p>{counter} clicked</p>
      <Button onClick = {onClick}/>
      <Input onChange = {onChange} />
    </div>
  );
}

export default App;
