
let questionElement, guess, info, shuffledTrivia, correctAnswer;

let currTriviaNum = 0;
let correctTrivia = 0;
document.addEventListener("DOMContentLoaded", () => {
    questionElement = document.getElementById('question');
    info = document.getElementById('info');
    guess = [ document.getElementById('guess1'), document.getElementById('guess2'), document.getElementById('guess3'), document.getElementById('guess4') ];
    
    shuffledTrivia = shuffle(trivia);
    newTrivia()
});

function newTrivia() {
    if (currTriviaNum == 25) // No questions left
        popup("You ran out of trivia questions. Reload the page and try again!!")
    
    if (correctTrivia == 9) // Win
        popup("You got 9/25 questions correct!! Awesome! (you win btw)")

    const trivia = shuffledTrivia[currTriviaNum];
    currTriviaNum += 1;

    correctAnswer = trivia.answers[0];
    questionElement.innerHTML = trivia.question;
    
    shuffledAnswers = shuffle(trivia.answers)
    for (let i = 0; i <= 3; i++) {
        guess[i].className = '';
        guess[i].innerHTML = shuffledAnswers[i];
    };


    info.innerHTML = `<strong>25 total questions - get 9 correct</strong> • <em>(questions used: ${currTriviaNum}/25) • (goal: ${correctTrivia}/9)</em><br><a href="//amazinaxel.com">Made by AmazinAxel (Alec) @ Hack Club</a>`;
}

function selectGuess(element) {
    if (element.innerHTML == correctAnswer) {
        correctTrivia += 1;
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
    setTimeout(newTrivia, 500); // 0.5s
}

function popup(message) {
    document.getElementById('main').classList.add('hidden'); // Hide trivia
    document.getElementById('popup').classList.remove('hidden'); // Show popup
    document.getElementById('popupHeader').innerHTML = message;
}

function shuffle(arr) {
  	for (let i = arr.length - 1; i > 0; i--) {
    	const j = Math.floor(Math.random() * (i + 1));
    	[arr[i], arr[j]] = [arr[j], arr[i]];
  	}
  	return arr;
}

