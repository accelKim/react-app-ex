import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function Detail() {
    // parameter 의 이름과 갯수대로 적어주기
    // let params = useParams();
    // console.log(params); // {id : '55733'}

    let {id} = useParams();

    async function  getMovie() { 
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    } ,[]);
         
    return (
        <div>
            <h1>Movie Detail</h1>
        </div>
    )
}

export default Detail;