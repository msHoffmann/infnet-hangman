const movies = ['Hangman', 'Jaws', 'Anaconda', 'Anabelle', 'Midsommar', "It", "Malignant", "Shining", "Poltergeist", "Cujo", "Us", "Insidious", "Ma", "Candyman", "Halloween"].map(i => i.toLocaleLowerCase());
const tryMax = 6;
const prompt = require('prompt-sync')();
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const mask = "_ ";
const skeleton = [
  `
    | (O_O)   
    |            
    |
    |
  `,
  `
    | (O_O)  
    |   |  
    |   |
    |   
  `,
  `
    | (O_O)   
    | --| 
    |   |
    |
  `,
  `
    | (O_O)    
    | --|--
    |   |
    |
  `,
  `
    | (O_O)   
    | --|--
    |   |
    |  | 
  `,
  `
    | (O_O)    
    | --|--
    |   |
    |  | |
  `
]

async function start() {

  const indexSelected = prompt(`Welcome to the Horror Movie Hangman! Choose a number between 1 and ${movies.length}? `);
  const word = movies[(Number(indexSelected) - 1)].split("");

  let label = word.map(() => mask);

  console.log(label.join(""));


  let userTry = 0;
  let gameOver = false;

  while (userTry < tryMax && !gameOver) {
    let letter = prompt(`Choose a letter: `).toLowerCase();

    if (!alphabet.includes(letter)) {
      console.log("Write a letter");
    } else {
      if (word.some(l => l === letter)) {
        for (var index in word) {
          if (word[index] === letter) {
            label[index] = word[index];
          }
        }
      } else {
        console.log(`You're wrong`)
        console.log(skeleton[userTry]);
        userTry++;
      }

    }

    if (!label.includes(mask)) {
      console.log("\nCongratulations, you won!")
      console.log("       ___________      ")
      console.log("      '._==_==_=_.'     ")
      console.log("      .-\\:      /-.    ")
      console.log("     | (|:.     |) |    ")
      console.log("      '-|:.     |-'     ")
      console.log("        \\::.    /      ")
      console.log("         '::. .'        ")
      console.log("           ) (          ")
      console.log("         _.' '._        ")
      console.log("        '-------'       \n")
      gameOver = true;
    }

    console.log(label.join(" "));
  }

  if (userTry === tryMax) {
    console.log("Oh! you lost");
    console.log(`The word was ${word.join("")}`);
    console.log("    _______________         ")
    console.log("   /               \       ")
    console.log("  /                 \      ")
    console.log("//                   \/\  ")
    console.log("\|   XXXX     XXXX   | /   ")
    console.log(" |   XXXX     XXXX   |/     ")
    console.log(" |   XXX       XXX   |      ")
    console.log(" |                   |      ")
    console.log(" \__      XXX      __/     ")
    console.log("   |\     XXX     /|       ")
    console.log("   | |           | |        ")
    console.log("   | I I I I I I I |        ")
    console.log("   |  I I I I I I  |        ")
    console.log("   \_             _/       ")
    console.log("     \_         _/         ")
    console.log("       \_______/           ")
  }

}


async function run() {
  let playAgain = true;
  while (playAgain) {
    await start();
    let resp = prompt(`Play again?(Y/N) `);

    if (resp.toLowerCase() === "n") {
      playAgain = false;
      console.log("See you soon")
    }
  }

}

run();