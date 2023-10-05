async function jsonFetch() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let jsonData = await response.json();
    let strData = await JSON.stringify(jsonData);
    console.log(strData);
}

jsonFetch();
    
// async function logJSONData() {
//     const response = await fetch("http://example.com/movies.json");
//     const jsonData = await response.json();
//     console.log(jsonData);
//   }