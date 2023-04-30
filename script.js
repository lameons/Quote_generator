let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('#new-quote').addEventListener('click', newQuote);

const quotes = [{
    quote: `"I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'" `,
    person: `Martin Luther King Jr.`
},{
    quote: `The only way to do great work is to love what you do."`,
    person: `Steve Jobs`
},{
    quote:`"In three words I can sum up everything I've learned about life: it goes on." `,
    person:`Robert Frost`
},{
    quote:`"I have not failed. I've just found 10,000 ways that won't work." `,
    person:`Thomas Edison`
},{
    quote:`"The only thing necessary for the triumph of evil is for good men to do nothing." `,
    person:`Edmund Burke
    `
},{
    quote:`"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." `,
    person:`Ralph Waldo Emerson`
},{
    quote:`"You miss 100% of the shots you don't take."`,
    person:`Wayne Gretzky`
},{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall." `,
    person:`Nelson Mandela`
},{
    quote:`"It does not matter how slowly you go as long as you do not stop."`,
    person:`Confucius`
}];


function newQuote(){
    let random = Math.floor(Math.random() *  quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}