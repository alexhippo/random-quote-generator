/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Alex Hipolito
******************************************/

/*** 
 * `quotes` array 
 * quote - a String containing the actual quote
 * source - a String containing the person or character who said it
 * title (optional) - a String containing the source's role or famous achievements
 * citation (optional) - a String containing a reference to the source of the quote e.g. book, movie, song, speech
 * year (optional) - an Number representing the year the quote originated
***/
const quotes = [
  {
    quote: `What would you do if you weren't afraid?`,
    source: `Sheryl Sandberg`,
    title: `Chief Operating Officer, Facebook`,
    citation: `Lean In: Women, Work and the Will to Lead`,
    year: 2013
  },
  {
    quote: `Grit is living life like it's a marathon, not a sprint.`,
    source: `Angela Lee Duckworth`,
    title: `Academic, psychologist & science author`,
    citation: `Grit: The Power of Passion and Perseverance`,
    year: 2016
  },
  {
    quote: `If you don't get out there and define yourself, you'll be quickly and inaccurately defined by others.`,
    source: `Michelle Obama`,
    citation: `Becoming`,
    year: 2018
  },
  {
    quote: `Dream with ambition, lead with conviction, and see yourselves in a way that others may not simply because they've never seen it before.`,
    source: `Kamala Harris`,
    title: `US Vice President`,
    year: 2020
  },
  {
    quote: `Do all the good you can, for all the people you can, in all the ways you can, as long as you can.`,
    source: `Hilary Clinton`,
    citation: `Twitter`,
    year: 2016
  },
  {
    quote: `What other people label or might try to call failure, I have learned is just God's way of pointing you in a new direction.`,
    source: `Oprah Winfrey`,
    citation: `Commencement speech at Howard University`,
    year: 2007
  },
  {
    quote: `Humans are allergic to change. They love to say, "We've always done it this way." I try to fight that. That’s why I have a clock on my wall that runs counter-clockwise.`,
    source: `Grace Hopper`,
    title: `Computer scientist`,
    citation: `"The Wit and Wisdom of Grace Hopper" by Philip Schieber`,
    year: 1987
  },
  {
    quote: `There is no greater weapon than knowledge and no greater source of knowledge than the written word.`,
    source: `Malala Yousafzai`,
    year: 2013
  },
  {
    quote: `When you have a dream you have to work hard to achieve that dream. Your dreams when you are young can be the force that keeps you going.`,
    source: `Evonne Goolagong Cawley`,
    title: `Tennis champion, winner of 7 Grand Slam titles`
  },
  {
    quote: `Disappointment and adversity can be catalysts for greatness.`,
    source: `Cathy Freeman`,
    title: `Olympic Gold Medallist`
  },
  {
    quote: `I do not try to dance better than anyone else. I only try to dance better than myself.`,
    source: `Arianna Huffington`,
    citation: `Thrive: The Third Metric to Redefining Success and Creating a Life of Well-Being, Wisdom, and Wonder`,
    year: 2014
  },
  {
    quote: `Do you want to be a leader that looks back in time and say that you were on the wrong side of the argument when the world was crying out for a solution?`,
    source: `Jacinda Ardern`,
    citation: `World Economic Forum`,
    title: `New Zealand Prime Minister`,
  },
]


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
 * `printQuote` function
 * Display the quote generated from getRandomQuotes(quotes) onto the web page
***/
function printQuote() {
  const quote = getRandomQuote(quotes);
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `
  if (quote.citation) {
    html += `
      <span class="citation">${quote.citation}</span>
    `
  }

  if (quote.title) {
    html += `
      <span class="citation">${quote.title}</span>
    `
  }

  if (quote.year) {
    html += `
      <span class="year">${quote.year}</span>
    `
  }
  html += `</p>`
  document.getElementById("quote-box").innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);