const movies = require('./data/movies.json');
const reviews = require('./data/reviews.json');
const users = require('./data/users.json');

const getMovie = (id, callback) => {
    setTimeout(() => {
        const movie = movies.find((movie) => movie.id === id);
        callback(movie);
    }, 1000);
};

const getReview = (movieId, callback) => {
    setTimeout(() => {
        const review = reviews.find((review) => review.movie_id === movieId);
        callback(review);
    }, 1000);
};

const getUser = (username, callback) => {
    setTimeout(() => {
        const user = users.find((user) => user.name === username);
        callback(user);
    }, 1000);
};

/* call function with callback and nested to call another function, disanvantage this way will break,
when data you're looking for is not found */
getMovie(2, (movie) => {
    console.log('Movies : \n', movie);
    getReview(movie.id, (review) => {
        console.log('Reviews : \n', review);
        getUser(review.reviewer, (user) => {
            console.log('Users : \n', user);
        })
    });
});