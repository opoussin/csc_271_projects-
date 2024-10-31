const favoriteMovie = [
    "Pitch Perfect",
    "../img/Pitch_Perfect.jpeg",
    5,
    "Pitch Perfect follows Beca, a freshman at Barden University who reluctantly joins the Barden Bellas, an all-female a cappella group, after being persuaded by its members. Initially struggling with clashing personalities and outdated musical choices, the Bellas gradually embrace a fresher approach under Beca's influence. Together, they take on fierce rivals, the all-male Treblemakers, and aim for the national championship in an exciting journey of friendship, creativity, and teamwork."
];


const movieImage = document.querySelector('.movie-image');
movieImage.src = favoriteMovie[1];
movieImage.alt = favoriteMovie[0];

const movieName = document.querySelector('.movie-name');
movieName.textContent = favoriteMovie[0];

const movieDescription = document.querySelector('.description');
movieDescription.innerHTML = favoriteMovie[3];

const movieRating = document.querySelector('.rating');
let stars = '';
for (var i = 0; i < 5; i++) {
    if (i < favoriteMovie[2]) {
        stars += '★';
    } else {
        stars += '☆';
    }
}
movieRating.textContent = stars;