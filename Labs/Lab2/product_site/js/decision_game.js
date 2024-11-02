var questions = [
    "Do you speak french?",
    "Are you learning French?",
    "Do you like cheese?",
    "Have you ever tried raclette?"
];

var final_decisions = [
    "Start Duolingo today!",
    "Practice, practice, practice!",
    "This is what you missed, go and try it!",
    "Don't go to France...",
    "You're ready to go study in France!"
];


const question = document.getElementById('question');
const answerYes = document.getElementById('yes');
const answerNo = document.getElementById('no');
const game = document.getElementById('game');
const reset = document.getElementById('reset');

var paly_btn = document.getElementById('play');
paly_btn.addEventListener('click', () => { // this starts the game when the play button is clicked
    game.style.display = 'block';
    paly_btn.style.display = 'none';
    nextStep();
});

let step = 0;

function nextStep() { // this switch will determine the next question to ask or the final answer to display
    switch (step) {
        case 0:
            question.innerText = "Do you know how to speak French?";
            answerYes.addEventListener('click', function yesHandler() {
                step = 2;
                nextStep();
                answerYes.removeEventListener('click', yesHandler);
            });
            answerNo.addEventListener('click', function noHandler() {
                step = 1;
                nextStep();
                answerNo.removeEventListener('click', noHandler);
            });
            break;

        case 1:
            question.innerText = "Are you learning French?";
            answerYes.addEventListener('click', function yesHandler() {
                question.innerText = final_decisions[1];
                endGame();
                answerYes.removeEventListener('click', yesHandler);
            });
            answerNo.addEventListener('click', function noHandler() {
                question.innerText = final_decisions[0];
                endGame();
                answerNo.removeEventListener('click', noHandler);
            });
            break;

        case 2:
            question.innerText = "Do you like cheese?";
            answerYes.addEventListener('click', function yesHandler() {
                question.innerText = final_decisions[4];
                endGame();
                answerYes.removeEventListener('click', yesHandler);
            });
            answerNo.addEventListener('click', function noHandler() {
                step = 3;
                nextStep();
                answerNo.removeEventListener('click', noHandler);
            });
            break;

        case 3:
            question.innerText = "Have you tried raclette?";
            answerYes.addEventListener('click', function yesHandler() {
                question.innerText = final_decisions[3];
                endGame();
                answerYes.removeEventListener('click', yesHandler);
            });
            answerNo.addEventListener('click', function noHandler() {
                question.innerText = final_decisions[2];
                endGame();
                answerNo.removeEventListener('click', noHandler);
            });
            break;

        default:
            question.innerText = "Thanks for playing!";
            endGame();
            break;
    }
}

function endGame() { // this end the game
    answerYes.style.display = 'none';
    answerNo.style.display = 'none';
    step = 0;
}

reset.addEventListener('click', () => { // this resets the game when the reset button is clicked
    game.style.display = 'none';    
    paly_btn.style.display = 'block';
    answerYes.style.display = 'block';
    answerNo.style.display = 'block';
});

