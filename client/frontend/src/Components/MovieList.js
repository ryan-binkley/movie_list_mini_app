import React from 'react';

const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

export const MovieList = () => {
    return (
        <div>
            {movies.map(movie => 
                <li>Title: {movie.title}</li>
            )}
        </div>
    )
}