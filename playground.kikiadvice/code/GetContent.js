const UTIL = require("./lib/util");
const GET_REMOTE = require('./lib/getRemoteContent.js')

// GetContent
exports.function = function (searchTerm) {
    var randomNumber = Math.floor(Math.random() * 800) + 1;
  //You can replace with a call to a web api - make sure you map api response to content model
  var advice = GET_REMOTE.getAdvice();
  var imageUrl = "https://picsum.photos/id/" + randomNumber + "/400/300";
  var content = {
    text: advice,
    image: imageUrl
  };
  // return content if exists, else null (No Result)
  return content;
}
