
let quote = document.querySelector("#quote");
let person = document.querySelector("#author");
let btn = document.querySelector("#new-quote-btn");


let quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    person: "Walt Disney"
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    person: "Will Rogers"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "Creativity is intelligence having fun.",
    person: "Albert Einstein"
  }  ,
  {
    quote: "Do what you can with all you have, wherever you are.",
    person: "Theodore Roosevelt"
  }  ,
  {    quote: "You are never too old to set another goal or to dream a new dream.",
    person: "C.S. Lewis"
  } ,

  {    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    person: "Winston S. Churchill"
  }



]

btn.addEventListener("click", function() {
  

  
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;

}
)