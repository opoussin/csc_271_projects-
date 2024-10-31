
const favoriteMovies = ["Pitch Perfect", "Mamma mia!"];

const moviePosters = [
    "../img/Pitch_Perfect.jpeg",
    "../img/MammaMiaTeaserPoster.jpg"
];

const moviePages = [
    "pitch-perfect.html",
	"mamma-mia.html"
];

const movieRatings = [5, 4];

const movieCards = document.querySelectorAll('.movie-card');

console.log(movieCards);
for( var i = 0; i < movieCards.length; i++){
    const movieImage = movieCards[i].getElementsByClassName('movie-image')[0];
    movieImage.src = moviePosters[i];
    movieImage.alt = favoriteMovies[i];

    const movieLink = movieCards[i].getElementsByClassName('movie-link')[0];
    movieLink.href = moviePages[i];
    movieLink.textContent = favoriteMovies[i];

    const movieRating = movieCards[i].getElementsByClassName('rating')[0];
    let stars = '';
    for (var j = 0; j < 5; j++) {
        if (j < movieRatings[i]) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    movieRating.textContent = stars;
};