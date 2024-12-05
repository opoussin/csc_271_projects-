function Ambassador(cardNumber, image, name, nationality, age, location, practice, languages, email){
    this.cardNumber = cardNumber;
    this.image = image;
    this.name = name;
    this.nationality = nationality;
    this.age = age;
    this.email = email;
    this.location = location;
    this.practice = practice;
    this.languages = languages;
    this.calculate_level = function(){
        let final_div = "<div class=level>";
        for(var i = 0; i < this.languages.length; i++){
            let level="<p>";
            if(this.practice[i] >= 6){
                level =  "<strong>" + this.languages[i] + "</strong> - " + this.practice[i]  + " years - Expert";
            }
            else if(this.practice[i] >= 4){
                level = "<strong>" + this.languages[i] + "</strong> - "+ this.practice[i]  + " years - Advanced";
            }
            else if(this.practice[i] >= 3){
                level = "<strong>" + this.languages[i] + "</strong> - "+ this.practice[i]  + " years - Intermediate";            
            }
            else{
                level = "<strong>" + this.languages[i] + "</strong> - "+ this.practice[i]  + " years - Beginner";
            }
            final_div += level + "</p> ";
        }
        final_div += "</div>";
        return final_div;
    }
}



const ambassador1 = new Ambassador(
    0, 
    "images/claire.jpg", 
    "Claire Fontaine", 
    "French", 
    22, 
    "Paris", 
    [7, 5, 2],
    ["English", "Spanish", "German"],
    "claire.fontaine@gmail.com"
);

const ambassador2 = new Ambassador(
    1, 
    "images/john.png", 
    "John Miller", 
    "American", 
    26, 
    "New York", 
    [5, 1, 2], 
    ["French", "Japanese", "Italian"],
    "john.miller@gmail.com"
);


function display_abassador(cardNumber, image, name, nationality, age, location, levels, email){
    var cards = document.getElementsByClassName('ambassador_card');
    cards[cardNumber].innerHTML = `<img src="${image}" alt="${name}">`
    + '<h3>' + name + '</h3>'
    + '<div class="card-content"><p>Nationality: ' + nationality + ' </p>'
    + '<p>Age: ' + age + ' years old </p>'
    +'<p>Location: ' + location + ' </p>' + levels + '<a href="mailto:' + email + '}"> '+email + '</a> </div>';
}

display_abassador(0, ambassador1.image, ambassador1.name, ambassador1.nationality, ambassador1.age, ambassador1.location, ambassador1.calculate_level(), ambassador1.email);
display_abassador(1, ambassador2.image, ambassador2.name, ambassador2.nationality, ambassador2.age, ambassador2.location, ambassador2.calculate_level(), ambassador2.email);