
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (i=0; i<names.length; i++) {
    var firstWord = names[i];
    var firstLetter = firstWord.charAt(0)
    var firstLetter = firstLetter.toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})(window);
