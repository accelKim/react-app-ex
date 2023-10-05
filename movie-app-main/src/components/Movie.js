import PropTypes from 'prop-types';
import {Link}from 'react-router-dom';

function Movie({key, id, coverImage, title, summary, genres}) {
    return (
        <div key={key}>
            <img src={coverImage} alt={title} />
            <h1>{title}</h1>
            <ul>{genres.map((genre, index) => 
                    <li key={index}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
            <Link to={`/movie/${id}`}>{title}</Link>
            {/* <a href = "/movie">{title}</a> */}
        </div>
    );
}

Movie.propTypes = {
    key : PropTypes.number,
    id : PropTypes.number,
    coverImage : PropTypes.string,
    title : PropTypes.string,
    summary : PropTypes.string,
    genres : PropTypes.array
}

export default Movie;