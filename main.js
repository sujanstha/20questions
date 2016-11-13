var readlineSync = require('readline-sync'); // Module for user input

var animal = {
  daddylonglegs: 0,
  bee: 0,
  penguin: 0,
  eagle: 0,
  giraffe: 0,
  octopus: 0,
  tiger: 0,
  elephant: 0,
  jellyfish: 0,
  bull: 0,
  parrot: 0,
  dolphin: 0,
  python: 0,
  crocodile: 0,
  cat: 0,
  leopard: 0,
  monkey: 0,
  zebra: 0,
  sheep: 0,
  rat: 0,
  owl: 0,
  spider: 0,
  frog: 0,
  polarbear: 0,
  snail: 0,
  tortoise: 0,
  rabbit: 0,
  salmon: 0,
  rhino: 0,
  fox: 0
};

var animalFeatures = {
  mammal: [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
  fly: [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  water: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  beak: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  nocturnal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  shell: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  slitering: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  whisker: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  paws: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  stripes: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  fur: [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  fourLegged: [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  sting: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  tail: [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
  scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
  carnivore: [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  spot: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  gills: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  horns: [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  feather: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

var questions = [
  "Is your animal a mammal?",
  "Does your animal fly?",
  "Does you your animal live in water only or on land & in water?",
  "Does your animal have a beak?",
  "Is your animal nocturnal?",
  "Does your animal have a shell?",
  "Does your animal slither?",
  "Does your animal have whiskers?",
  "Does your animal have paws?",
  "Does your animal have stripes?",
  "Does your animal have fur?",
  "Does your animal have four legs?",
  "Can your animal sting?",
  "Does your animal have a tail?",
  "Does your animal have scales?",
  "Is your animal a carnivore?",
  "Does your animal have patterned spots?",
  "Does your animal have gills?",
  "Does your animal have horns or tusks?",
  "Does your animal have feathers?"
];

askQuestion();

function askQuestion() {
  var guessed = false;
  var count = 0;
  while (!guessed && count < 20 ) {
    console.log(questions[count]); // Displaying questions

    // Wait for user's response.
    var userInput = readlineSync.question('Your Answer: ');
    if (userInput == "yes") {
      increaseProbability(count, true);
      // console.log(animal);
    }
    else {
      increaseProbability(count, false);
      // console.log(animal);
    }
    count++;

    // Guessing
    var countPossibility = 0;
    var guessedKey = '';
    for (var key in animal) {
      if (animal[key] >= 0) {
        countPossibility++;
        guessedKey = key;
      }
    }
    if (countPossibility == 1) {
      console.log('Is your word '+ guessedKey + "?");
      count = 20;
    }
  }
  // Wait for user's response.
  var isCorrect = readlineSync.question('Your Answer: ');
  if (isCorrect == "yes") {
    return console.log("I won!");
  }
  else {
    return console.log("You won! I can't guess your word.");
  }
}

function makeEducatedGuess() {

}

function increaseProbability(count, isPresent) {
  var index = 0;
  for (var key in animal) {
    if (isPresent) {
      if ((animalFeatures[Object.keys(animalFeatures)[count]][index] == 1) && (animal[key] >= 0)) {
        animal[key]++;
      }
      else {
        animal[key] = -1;
      }
    }
    else {
      if ((animalFeatures[Object.keys(animalFeatures)[count]][index] === 0) && (animal[key] >= 0)) {
        animal[key]++;
      }
      else {
        animal[key] = -1;
      }
    }
    index++;
  }
}
