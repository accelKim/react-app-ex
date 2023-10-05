import  {useState, useEffect} from 'react';

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1280")
    .then(response => response.json())
    .then(json => {
      setData(json.results);
      setIsLoading(false);
    });
    
  } ,[]);
    
  return (
    <div>
      <h1>Poketmons!</h1>
      <hr />
      {isLoading ? <p>Loading...</p> : null}
      <ul>
        {data.map((item, index) => 
        <li key={item.name}>{item.name}<br />
        <a href='{item.url}'>{item.url}</a> </li>)}
      </ul>
      
      
    </div>
  );
}

export default App;
