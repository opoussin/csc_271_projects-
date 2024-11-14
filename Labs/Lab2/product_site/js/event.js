var suggestion = document.getElementById('suggestion');

var validSuggestion = false;

function suggestionFocus() {
    feedback.innerHTML = 'Please enter your recipe suggestion (small sentence)'; 
}

suggestion.addEventListener('focus', suggestionFocus);

function suggestionUnfocus(){
    var splits = suggestion.value.split(' ');
    if(!suggestion.value){
        suggestion.style.border = '2px solid red';
        feedback.innerHTML = 'You did not enter a suggestion. Please try again.';
        validSuggestion = false;
    }else if(splits.length <2){
        suggestion.style.border = '2px solid red';
        feedback.innerHTML = 'You did not enter a valid suggestion (small sentence). Please try again.';
        validSuggestion = false;
    }else{
        suggestion.style.borderColor = '#ccc';
        feedback.innerHTML = '';
        validSuggestion = true;
    }
    
}

suggestion.addEventListener('blur', suggestionUnfocus);

var form = document.getElementById("recipeForm");

form.addEventListener("submit", function(event){
    if(!validSuggestion){
        event.preventDefault();
        feedback.innerHTML = 'Issues with your input. Please try again.';
    }else{
        feedback.style.color = 'green';
        feedback.innerHTML = "Thank you for sharing your recommendation!"; 
        suggestion.value = '';
    }
});