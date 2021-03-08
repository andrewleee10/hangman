const inquirer = require('inquirer')

const movieArr = []
const correct = []
const incorrect = []
let guesses = 10
let example = 'Test Drive'
let hiddenEx = example.replace(/\S/g, "_")



const showAns = () => {
  
}


const hangman = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'guess',
      message: 'Enter a letter:'
    }
  ])
    .then(res => {

      let isItRight = false

      for(let i=0; i<example.length; i++) {
        if(res.guess.toLowerCase() === example[i].toLowerCase()) {
          correct.push(example[i])
          hiddenEx = hiddenEx.substring(0,i) + example[i] + hiddenEx.substring(i+1)
          example = example.replace(example[i], ' ')
          isItRight = true
        } 
      }

      if (isItRight === false) {
        guesses -= 1
        incorrect.push(res.guess)
        console.log(incorrect)
        console.log(guesses)
      }

      if(example.replace(' ','') === '' || guesses <= 0) {
        process.exit() 
      } else {
        hangman()
      } 
      
      console.log(`---${guesses} remaining---`)
      console.log(hiddenEx)
      console.log(example)
      console.log(correct)

    })
    .catch(err => console.log(err))
}

hangman()