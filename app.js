// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { isYes } from '../utils.js';

const quizButton = document.getElementById('quiz-launch');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz?');

    if (confirmed){
        console.log('continue the quiz');
        const name = prompt('What is your name?');
        const ans1 = prompt('Does the professor have a five foot vertical leap?');
        const ans2 = prompt('Does the professor think a curtain is a solid wall?');
        const ans3 = prompt('Does the professor understand how zippers work?');
        const ans4 = prompt("Does the professor really want to jump into the oven every time it's on?");
        const ans5 = prompt('Does the professor realize his actions have consequences?');
        let score = 0 ;
        if (isYes(ans1)) score++;
        if (isYes(ans2)) score++;
        if (isYes(ans3)) score++;
        if (isYes(ans4)) score++;
        if (isYes(ans5)) score++;
        console.log('final score', score);
        results.textContent = `${name} you got ${score} right!`;
    } else {
        console.log('user canceled');
    }
});