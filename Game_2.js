const questions = [
  {
    question: "What is the most abundant greenhouse gas?",
    options: ["Carbon Dioxide", "Methane", "Water Vapor", "Ozone"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which of the following is a renewable energy source?",
    options: ["Coal", "Natural Gas", "Solar Power", "Nuclear Energy"],
    answer: "Solar Power"
  },
  {
    question: "Which of the following activities contributes to deforestation?",
    options: ["Recycling", "Planting Trees", "Logging", "Using Energy-Efficient Appliances"],
    answer: "Logging"
  },
  {
    question: "What percentage of the Earth's surface is covered by water?",
    options: ["50%", "75%", "90%", "71%"],
    answer: "71%"
  },
  {
    question: "Which gas is responsible for the hole in the ozone layer?",
    options: ["Carbon Dioxide", "Methane", "Chlorofluorocarbons (CFCs)", "Nitrous Oxide"],
    answer: "Chlorofluorocarbons (CFCs)"
  },
  {
    question: "Which type of pollution is caused by nitrogen and sulfur emissions from vehicles and industries?",
    options: ["Air Pollution", "Water Pollution", "Noise Pollution", "Light Pollution"],
    answer: "Air Pollution"
  },
  {
    question: "Which of the following is NOT a method to conserve water?",
    options: ["Taking shorter showers", "Turning off the tap while brushing teeth", "Watering the garden in the afternoon", "Fixing leaks in pipes"],
    answer: "Watering the garden in the afternoon"
  },
  {
    question: "Which of the following materials is biodegradable?",
    options: ["Plastic", "Glass", "Aluminum", "Paper"],
    answer: "Paper"
  },
  {
    question: "What is the process of turning waste materials into reusable objects or materials called?",
    options: ["Recycling", "Composting", "Incineration", "Landfilling"],
    answer: "Recycling"
  },
  {
    question: "Which of the following is a non-renewable energy source?",
    options: ["Wind Power", "Solar Power", "Coal", "Hydropower"],
    answer: "Coal"
  }
];

// Shuffle questions array and options for each question once at the beginning
questions.forEach(question => {
  question.options.sort(() => Math.random() - 0.5);
});
questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function displayQuestion() {
  const currentQ = questions[currentQuestion];
  questionElement.textContent = currentQ.question;

  optionsElement.innerHTML = '';
  currentQ.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('option');
    optionDiv.textContent = option;
    optionDiv.dataset.index = index;
    optionDiv.addEventListener('click', checkAnswer);
    optionsElement.appendChild(optionDiv);
  });

  nextButton.style.display = 'none';
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const selectedAnswer = selectedOption.textContent;
  const correctAnswer = questions[currentQuestion].answer;

  if (selectedAnswer === correctAnswer) {
    score++;
    selectedOption.style.backgroundColor = '#4CAF50'; // Green color for correct answer
  } else {
    selectedOption.style.backgroundColor = '#f44336'; // Red color for wrong answer
    const correctOption = Array.from(optionsElement.children).find(option => option.textContent === correctAnswer);
    correctOption.style.backgroundColor = '#4CAF50'; // Highlight the correct answer
  }

  Array.from(optionsElement.children).forEach(option => {
    option.removeEventListener('click', checkAnswer); // Disable clicking other options after selecting one
  });

  nextButton.style.display = 'block';
}

function displayResult() {
  resultElement.textContent = `You scored ${score} out of ${questions.length}`;
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';
  nextButton.style.display = 'none';
  resultElement.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    displayResult();
  }
});

displayQuestion();