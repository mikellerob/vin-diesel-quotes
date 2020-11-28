let quoteList = [
	'Find your confidence, lead with love... the rest will follow.',
	'The most important thing in life will always be family. The people right here, right now.',
	"It's insecurity that is always chasing you and standing in the way of your dreams.",
	"Show me how you drive and I'll show you who you are.",
	'When people believe in you, you can do miraculous things.',
	"You break her heart, I'll break your neck.",
	'I am definitely a person of color.',
  'I have dangerous bones in my body.',
	'We all deal with being unfairly judged.',
	'Well, love motivates me in everything I do.',
	"Nothing comes easy when I'm in character, because everything I do in character, I take seriously.",
	"I think there's something we all relate to about...wanting to get to our most primal self.",
	"Video games are one step before a whole other virtual universe.",
	"I'm not disciplined enough to be a writer consistently. I write when I have to.",
	"If you believe in the project, you have to support it.",
	"I believe in paying special attention to every project that you do and supporting the projects you do.",
	"The wonderful magic of a newborn... strengthens our responsibility to make this a better world...",
	"There is one thing, that rises above any storm, more powerful than any earthquake, flood or fire…. And that is...Love.",
	"As a life long actor, you never want to give a wooden performance, even when you are playing a Tree. Haha",
	"I'm doing a Live.",
	"when did this turn into beautiful world?",
	"I am Groot.",
	"I shaved my head about 15 years ago and the first time I shaved it, I started running my hand through my hair and it was very therapeutic.",
	"With age, you get to a place where you don't want to knock people out. You just want to give people a hug.",
	"I envision the future sunny and with love, harmony and oneness. I think Hollywood is changing.",
	"Rated R movies are few and far between, nowadays. We're all seeing less and less rated R movies, and less and less of them are being made.",
	"A person in my position has to restrain himself.",
	"I love women more than anything.",
	"I always have issues with trust.",
	"Most of my confidence came from being with ladies, because I certainly wasn't getting any acting jobs.",
	"Hollywood is more concerned about its male actors being in shape than its female actors.",
	"Being male is a matter of birth. Being a man is a matter of age. But being a Gentleman is a matter of choice.",
	"I'm the most ambitious person you ever met.",
	"It's really bizarre because no one knows this, but elephants have killed more animal trainers than any other animal.",
	"I talk too much.",
	"Women are sacred.",
];

let refreshQuote = function(){
	let randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
	let quoteEl = document.getElementById('quote');
	quoteEl.textContent = randomQuote;
}

//optional to pass this to click event if want full page refresh
let refreshPage = function(e){
	e.preventDefault();
	window.location.reload(true);
}

refreshQuote();
let signature = document.getElementById('signature');
signature.textContent = "- Vin Diesel";
document.getElementById("quote-refresh-button").addEventListener("click", refreshQuote);


