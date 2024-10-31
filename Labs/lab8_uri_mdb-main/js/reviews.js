const usernames = ["Océane", "Zoé", "Jeanne"];
const reviewDates = ["2024-10-30", "2024-11-01", "2024-11-05"];
const reviews = [
    "Great movie, highly recommend!",
    "It was okay, not the best I've seen.",
    "Absolutely loved it, a must-watch!"
];
const ratings = [5, 3, 4];

const reviewCards = document.querySelectorAll('.review-card');

for( var i = 0; i < reviewCards.length; i++) {
    const reviewRating = reviewCards[i].getElementsByClassName('review-rating')[0];
    let stars = '';
    for (let j = 0; j < 5; j++) {
        if (j < ratings[i]) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    reviewRating.textContent = stars;
    reviewRating.setAttribute('data-rating', ratings[i]);

    const reviewUsername = reviewCards[i].getElementsByClassName('review-username')[0];
    reviewUsername.textContent = usernames[i] + ' ';
	console.log(usernames[i]);

    const reviewDate = reviewCards[i].getElementsByClassName('review-date')[0];
	console.log(reviewDates[i]);


    const reviewText = reviewCards[i].getElementsByClassName('review-text')[0];
    reviewText.innerHTML = reviews[i];
	console.log(reviews[i]);
};

var filterDropdown = document.getElementById('rating-filter');

filterDropdown.addEventListener('change', function() {
    var selected_rating = filterDropdown.value;

	for( var k= 0 ; k < reviewCards.length; k++) {
   
        const reviewRating = reviewCards[k].querySelector('.review-rating');
        const cardRating = reviewRating.getAttribute('data-rating');

        if (selected_rating === 'All' || selected_rating == cardRating) {
            reviewCards[k].style.display = 'block';
        } else {
            reviewCards[k].style.display = 'none';
        }
    };
});