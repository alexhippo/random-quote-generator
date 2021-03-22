/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Alex Hipolito
******************************************/

/*** 
 * `quotes` array 
 * quote - a String containing the quote
 * source - a String containing who said the quote
 * title (optional) - a String containing the source's role or achievements
 * citation (optional) - a String containing where the quote was said/stated/written
 * year (optional) - an Integer containing the Year when the quote was said/stated/written
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
    title: `Vice President of United States of America`,
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
    title: `Olympic Gold medallist`
  },
  {
    quote: `I do not try to dance better than anyone else. I only try to dance better than myself.`,
    source: `Arianna Huffington`,
    citation: `Thrive: The Third Metric to Redefining Success and Creating a Life of Well-Being, Wisdom, and Wonder`,
    year: 2014
  },
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

}


/***
 * `printQuote` function
***/
function printQuote() {

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);