const recyclableItems = ['plastic bottle', 'aluminum can', 'glass jar', 'newspaper'];
const nonRecyclableItems = ['banana peel', 'candy wrapper', 'pizza box', 'paper towel'];
document.getElementById('startBtn').addEventListener('click', startGame);


let score = 0;
let rounds = 5; // Default to 10 rounds
let currentRound = 0;
let shuffledItems = [];





function startGame() {
    shuffledItems = shuffle(recyclableItems.concat(nonRecyclableItems));
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('startBtn').style.display = 'none';
    playRound();
}

function playRound() {
    currentRound++;
    if (currentRound > rounds) {
        endGame(); // Call endGame() when all rounds are completed
        return;
    }
    document.getElementById('roundInfo').textContent = `Round ${currentRound} of ${rounds}`;
    currentItem = shuffledItems.pop();
    document.getElementById('itemInfo').textContent = `You found a ${currentItem}`;
    displayDecisionButtons();
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayDecisionButtons() {
    const decisionButtonsDiv = document.getElementById('decisionButtons');
    decisionButtonsDiv.innerHTML = `
        <button onclick="recycleItem(true)">Recycle</button>
        <button onclick="recycleItem(false)">Discard</button>
    `;
}

function recycleItem(recycle) {
    const currentItem = document.getElementById('itemInfo').textContent.replace('You found a ', '');
    
    if (recycle) {
        if (recyclableItems.includes(currentItem)) {
            score += 10;
        } else {
            score -= 5;
        }
    } else {
        if (nonRecyclableItems.includes(currentItem)) {
            score += 5;
        }
    }
    document.getElementById('scoreInfo').textContent = `Current score: ${score}`;
    playRound();
}
function endGame() {
    const finalScore = document.createElement('div');
    finalScore.textContent = `Game over! Final score: ${score}`;
    
    const container = document.getElementById('container');
    if (container) {
        container.appendChild(finalScore);
    } else {
        console.error("Container element not found.");
    }

    // Reset game state
    score = 0;
    currentRound = 0;
    shuffledItems = [];

    document.getElementById('startBtn').style.display = 'block';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('scoreInfo').textContent = ''; // Clear score info

}
