const images = ['../images/new_york.jpg', '../images/los_angeles.jpg', '../images/chicago.jpg'];
const cities = ['New York City', 'Los Angeles', 'Chicago'];
const descriptions = ['The city that never sleeps offers endless opportunities for students, from world-class universities to cultural experiences.', 
    'Home to Hollywood and beautiful beaches, LA is a vibrant city with diverse educational institutions.',
'Known for its architectural marvels and rich history, Chicago offers a unique urban experience for students.'
];

const cards = document.querySelectorAll('.city_cards');
const cardImages = document.getElementsByClassName('card-img');
const cityNames = document.getElementsByClassName('name');
const cityDescriptions = document.getElementsByClassName('description');
const cards_content = document.getElementsByClassName('card_content');

function make_card (){
   for( var i = 0; i < cards.length; i++){// this loop goes through every card in the file and updates its data
        card_content(i, cities[i], descriptions[i], images[i]);
    };

    for (let j = 0; j < cityNames.length; j++) {
        cityNames[j].style.color = ' #FF0000';
    }      
}



function card_content (i, name, description, image){
        //card_content.innerHTML += '<h3 class="name">' + city_name + '"</h3>';
        //card_content.innerHTML += '<p class="description">' + city_description + '</p>';
        const cardImage = cardImages[i];
        cardImage.src = image;
        cardImage.alt = name;
        cityNames[i].textContent = name;
        cityDescriptions[i].textContent = description;
}


make_card();