//modified dan schiffman code
var everything = document.getElementsByTagName("body");
console.log('scrambling');

for (var i = 0; i < everything.length; i++) {
  // Look at the full content
  var txt = everything[i].innerHTML;

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    if (tokens[j].charAt(0) !== '<') {
      tokens[j] = tokens[j].replace(tokens[j],"you've been hacked");
    }
  }
  everything[i].innerHTML = tokens.join('');
}
