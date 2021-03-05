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

// another manner to handle promise, with IFFE async format 
(async () => {
    try {
        const movie = await getMovie(1);
        console.log('Movies : \n', movie);

        const review = await getReview(movie.id);
        console.log('Reviews : \n', review);

        const user = await getUser(review.reviewer);
        console.log('Users : \n', user);
    } catch(err) {
        console.log(err);
    }
})();
