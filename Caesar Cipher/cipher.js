// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This is the content script for the extension
// Note there is also a content.css file

// Grab the entire document body
// This gets an array even though it's likely just one thing
var everything = document.getElementsByTagName("body");
console.log('word redactor extension running');

for (var i = 0; i < everything.length; i++) {
  // Look at the full content
  var txt = everything[i].innerHTML;

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    // Ignore anything that is a tag
    if (tokens[j].charAt(0) !== '<') {
      // Now replace the word "the" with "the" spanned with the class "redact"
      tokens[j] = tokens[j].replace(tokens[j], scramble(tokens[j], 3));
    }
  }
  // Put everything back in
  everything[i].innerHTML = tokens.join('');
}

function scramble(word, key){//input char and number of shifts
  let currentUnicode = 0;
  let newUnicode = 0;
  let newWord= "";

  for (var i = 0; i < word.length, i++ ) {
    currentUnicode = charCodeAt(i);
    newUnicode = currentUnicode + charCodeAt
    newWord += String.fromCharCode(newUnicode)
    }
  return newWord;
}
