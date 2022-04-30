# Now. what do i want to do ?
=> create a console game => rock paper scissors 


# main functions and functionalities 
- a function that returns a random element of an array to choose from rock paper and scissors. => *computer play*


- a function that compaers the user input to the random choice of the first function. and return "win" or "lose" => *play round*
  - *play round* should return true if the user won. and print the specified case using console.log
  - *play round* should be able to make you repeate the match if you got the same choise as the pc
  - *play round* should return 'same' if both computer and human choose the same thing

- a function that stores the result of 5 games with the computer *using for loop*. and report "win" or "lose" in the end => *game*
  - *game* => if the return of *play round* was true. then increment a varyable *player results*
  - *game* => should be able to repeate the round if the return from *play round* was 'same'
  - *game* => if *player results* >= 3. then print. "you win"


# functionality

- the final output should look like "You Lose! Paper beats Rock" => this mean that the return form play round should be specified for each case => an output will apper after each round. and after 5 rounds. the final result will apper

- steps
  - i will take the user input using "prompt" and convert it to *small case* and save it into varyable **D**
  - create *computer play* and test it **D**
  - create *play round* and test it **D**
  - create *game* and test it
  