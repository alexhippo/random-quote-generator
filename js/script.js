/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Alex Hipolito
******************************************/

/*** 
 * `quotes` array 
 * quote - a String containing the actual quote
 * source - a String containing the name of the character who said it
 * altName (optional) - (additional quote object property) a String containing the source's alternative Hero/Villain name
 * citation (optional) - a String containing a reference to the source of the quote e.g. movie or series
 * year (optional) - an Number representing the year the movie/series was published
***/
const quotes = [
  {
    quote: `Why was she up there all this time?`,
    source: `Okoye`,
    citation: `Avengers: Infinity War`,
    year: 2018
  },
  {
    quote: `I know my value. Anyone else's opinion doesn't really matter.`,
    source: `Peggy Carter`,
    citation: `Agent Carter`
  },
  {
    quote: `Just because something works doesn't mean it can't be improved.`,
    source: `Shuri`,
    citation: `Black Panther`,
    year: 2018
  },
  {
    quote: `She's not alone.`,
    source: `Natasha Romanoff`,
    altName: `Black Widow`,
    citation: `Avengers: Infinity War`,
    year: 2018
  },
  {
    quote: `You didn't think you were the only magical girl in town, did you?`,
    source: `Agnes`,
    altName: `Agatha Harkness`,
    citation: `WandaVision`,
    year: 2021
  },
  {
    quote: `Thanks for the lesson. But I don't need you to tell me who I am.`,
    source: `Wanda Maximoff`,
    altName: `Scarlet Witch`,
    citation: `WandaVision`,
    year: 2021
  },
  {
    quote: `We never lose our demons...we only learn to live above them.`,
    source: `The Ancient One`,
    citation: `Doctor Strange`,
    year: 2016
  },
  {
    quote: `I have nothing to prove to you.`,
    source: `Carol Danvers`,
    altName: `Captain Marvel`,
    citation: `Captain Marvel`,
    year: 2019
  },
  {
    quote: `I'm not a queen or a monster. I'm the Goddess of Death.`,
    source: `Hela`,
    citation: `Thor: Ragnarok`,
    year: 2017
  },
  {
    quote: `I have lived most of my life surrounded by my enemies. I would be grateful to die surrounded by my friends.`,
    source: `Gamora`,
    citation: `Guardians of the Galaxy`,
    year: 2014
  }
]
/***
 * `printCountdown` function
 * Auto refresh quotes every 20 seconds
 * Display a countdown timer to indicate how many seconds left before the quotes refresh
***/
let countdown = 20;
function printCountdown() {
  if (countdown <= 0) {
    printQuote();
    resetCountdown(20);
    document.getElementById("load-quote").innerHTML = `Show another quote in ${countdown} seconds`
  } else {
    document.getElementById("load-quote").innerHTML = `Show another quote in ${countdown} ${countdown === 1 ? `second` : `seconds`}`
  }
  countdown--;
}

window.setInterval(printCountdown, 1000)

/***
 * `resetCountdown` function
 * Reset countdown to the specified number of seconds
***/
function resetCountdown(seconds) {
  countdown = seconds;
}

/***
 * `getRandomQuote` function
 * Generate a random number from 0 to the number of quotes in the `quotes` array 
 * and use that to return a random quote object from the `quotes` array.
***/
function getRandomQuote(quotes) {
  const randomNumber = Math.floor(Math.random() * quotes.length - 1) + 1;
  return quotes[randomNumber];
}

/***
 * `getRandomBgColour` function
 * Generate a random background colour in rgb() format
 * by generating random Red, Green and Blue values as an array
 * then converting into a string to use as input for rgb()
 * Max value of 155 was used to ensure background colour is darker
 * and quote is more readable with white text.
***/
function getRandomBgColour() {
  let colour = [];
  for (let i = 1; i <= 3; i++) {
    colour.push(`${Math.floor(Math.random() * 155)}`);
  }
  return `rgb(${colour.toString()})`;
}

/***
 * `printQuote` function
 * Display the quote generated from getRandomQuotes(quotes) onto the web page
 * Displays additional quote object property "altName" if available
***/
function printQuote() {
  const quote = getRandomQuote(quotes);
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`

  if (quote.altName) html += `<span class="altName">${quote.altName}</span>`
  if (quote.citation) html += `<span class="citation">${quote.citation}</span>`
  if (quote.year) html += `<span class="year">${quote.year}</span>`

  html += `</p>`

  document.getElementById("quote-box").innerHTML = html;

  //Reset countdown once a new quote is printed
  resetCountdown(20);

  document.querySelector("body").style = `background-color: ${getRandomBgColour()}`
}

//Initialise page with a quote from quotes array
printQuote();

//Initialise quote button with countdown timer
document.getElementById("load-quote").innerHTML = `Show another quote in ${countdown} seconds`

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);