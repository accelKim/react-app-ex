import {useState, useEffect} from 'react';

function Image() {
  function detroyFunc() {
    console.log("이미지가 소멸됨");
  };
  function createFunc() {
    console.log("이미지가 생성됨");
    detroyFunc();
  }
  useEffect(createFunc, []); // 생성시에 한번만 호출
  return (
    <img src="react.png" alt="로고"></img>
  )
}

// 버튼이 눌릴때마다 이미지가 나타나고, 사라지도록 토글 구현
function App2() {
  let [toggle, setToggle] = useState(false);
  const onClick = () => 
     setToggle(cur => !cur);
  return (
    <div>
      <h1>Functional Component</h1>
      {toggle? <Image /> :  null}
      <button onClick={onClick}>{toggle ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App2;
