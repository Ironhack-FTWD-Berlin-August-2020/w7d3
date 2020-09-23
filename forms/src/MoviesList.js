import React from 'react';

export default function MoviesList(props) {
    // console.log(props.movies);
    const movies = props.movies.map(movie => {
        return (
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.director}</p>
                <p>{movie.rate}</p>
                {movie.hasOscars ? <p>Oscar winning movie ⭐️</p> : <p>No Oscars 😕</p>}
            </div>
        )
    });
    console.log(movies);
    return <div>{movies}</div>
}
