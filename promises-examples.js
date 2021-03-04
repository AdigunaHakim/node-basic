const movies = require('./data/movies.json');
const reviews = require('./data/reviews.json');
const users = require('./data/users.json');

const getMovie = (id) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            const movie = movies.find((movie) => movie.id === id);

            if(movie) {
                resolve(movie);
            } else {
                rejects('Movie Not Found!');
            }
        }, 1000);
    });
};

const getReview = (movieId) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            const review = reviews.find((review) => review.movie_id === movieId);
            
            if (review) {
                resolve(review);
            } else {
                rejects('Review Not Found!');
            }
        }, 1000);
    });
};

const getUser = (username) => {
    return new Promise((resolve, rejects) => { 
        setTimeout(() => {
            const user = users.find((user) => user.name === username);
            if (user) {
                resolve(user);
            } else {
                rejects('User Not Found');
            }
        }, 1000);
    });
};

// more simple, scaleable & well structure than callback, most important we can catch if any error
getMovie(1)
.then(movie => {
    console.log('Movies : \n', movie);
    return getReview(movie.id);
})
.then(review => {
    console.log('Reviews : \n', review);
    return getUser(review.reviewer);
})
.then(user => {
    console.log('Users : \n', user);
})
.catch(err => {
    console.log(err);
});