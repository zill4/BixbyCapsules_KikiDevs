exports.getAdvice = getAdvice

var http = require('http')

function getAdvice() {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://api.adviceslip.com/advice', {
    format: 'json',
  });
  
  return response.slip.advice;
}
