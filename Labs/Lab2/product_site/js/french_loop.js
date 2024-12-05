const images = [
    './images/paris.jpg', 
    './images/lyon.jpg', 
    './images/marseille.jpg'
];

const cities = [
    'Paris', 
    'Lyon', 
    'Marseille'
];

const descriptions = [
    'Paris, the capital city, is known for its art, fashion, and iconic landmarks like the Eiffel Tower.',
    'Lyon is famous for its cuisine and rich history, making it a cultural hub in France.',
    'Marseille, a port city, offers beautiful beaches, vibrant markets, and a unique Mediterranean atmosphere.'
];

// Select all elements in the French city card section
const frenchCards = document.querySelectorAll('.city_cards');
const frenchCardImages = document.getElementsByClassName('card-img');
const frenchCityNames = document.getElementsByClassName('name');
const frenchCityDescriptions = document.getElementsByClassName('description');

let j = 0;

while (j < frenchCards.length) { // this loop goes through every card in the file and updates its data 
    const cardImage = frenchCardImages[j];
    cardImage.src = images[j];
    cardImage.alt = cities[j];
    frenchCityNames[j].textContent = cities[j];
    frenchCityDescriptions[j].textContent = descriptions[j];
    j++;
}
