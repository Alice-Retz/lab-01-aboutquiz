import { isYes } from '../utils.js';
const resultGood = document.getElementById('good-result');
const resultBad = document.getElementById('bad-result');

const quizButton = document.getElementById('quiz-launch');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz?');

    if (confirmed){
        console.log('continue the quiz');
        const name = prompt('What is your name?');
        const ans1 = prompt('Does the professor have a five foot vertical leap?');
        const ans2 = prompt('Does the professor love bacon?');
        const ans3 = prompt('Does the professor understand how zippers work?');
        const ans4 = prompt("Does the professor really want to jump into the oven every time it's on?");
        const ans5 = prompt('Does the professor realize his actions have consequences?');
        let score = 0 ;
        if (isYes(ans1)) score++;
        if (!(isYes(ans2))) score++;
        if (isYes(ans3)) score++;
        if (isYes(ans4)) score++;
        if (isYes(ans5)) score++;
        alert("You're done! Let's see how you did.");
        console.log('final score', score);
        if (score >= 4) {
            resultGood.style.display = 'block';
            return results.textContent = `${name}, you got ${score} right! That's ${Math.floor(score / 5 * 100)}%! You know that the professor hates bacon, and understands that if he whacks Kiki while she's sleeping he'll get squirt with water, he just doesn't care!`;
        } else {
            resultBad.style.display = 'block';
            return results.textContent = `${name}, you got ${score} right. That's ${Math.floor(score / 5 * 100)}%. Maybe you should spend sometime looking at cross-eyed orange cats to study. Here, let me help:`;
        }
    } else {
        console.log('user canceled');
    }
});