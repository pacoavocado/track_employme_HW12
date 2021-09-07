-- Add your code below and execute file in MySQL Shell --
SELECT movie_name, review
FROM movies
INNER JOIN reviews ON movies.id = reviews.movie_id;
