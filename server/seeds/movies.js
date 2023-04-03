/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert(
    [
      { movie_name: 'The Godfather', imdb_link: 'https://www.imdb.com/title/tt0068646/' },
      { movie_name: 'The Shawshank Redemption', imdb_link: 'https://www.imdb.com/title/tt0111161/' },
      { movie_name: 'The Dark Knight', imdb_link: 'https://www.imdb.com/title/tt0468569/' },
      { movie_name: 'Pulp Fiction', imdb_link: 'https://www.imdb.com/title/tt0110912/' },
      { movie_name: 'The Lord of the Rings: The Return of the King', imdb_link: 'https://www.imdb.com/title/tt0167260/' },
      { movie_name: 'Forrest Gump', imdb_link: 'https://www.imdb.com/title/tt0109830/' },
      { movie_name: 'Inception', imdb_link: 'https://www.imdb.com/title/tt1375666/' },
      { movie_name: 'The Matrix', imdb_link: 'https://www.imdb.com/title/tt0133093/' },
      { movie_name: 'Fight Club', imdb_link: 'https://www.imdb.com/title/tt0137523/' },
      { movie_name: 'The Silence of the Lambs', imdb_link: 'https://www.imdb.com/title/tt0102926/' },
      { movie_name: 'Goodfellas', imdb_link: 'https://www.imdb.com/title/tt0099685/' },
      { movie_name: 'The Green Mile', imdb_link: 'https://www.imdb.com/title/tt0120689/' },
      { movie_name: 'The Departed', imdb_link: 'https://www.imdb.com/title/tt0407887/' },
      { movie_name: 'The Prestige', imdb_link: 'https://www.imdb.com/title/tt0482571/' },
      { movie_name: 'American History X', imdb_link: 'https://www.imdb.com/title/tt0120586/' },
      { movie_name: 'Saving Private Ryan', imdb_link: 'https://www.imdb.com/title/tt0120815/' },
      { movie_name: 'The Terminator', imdb_link: 'https://www.imdb.com/title/tt0088247/' },
      { movie_name: 'Jurassic Park', imdb_link: 'https://www.imdb.com/title/tt0107290/' },
      { movie_name: 'Blade Runner', imdb_link: 'https://www.imdb.com/title/tt0083658/' },
      { movie_name: 'Alien', imdb_link: 'https://www.imdb.com/title/tt0078748/' }
    ]
  );
};
