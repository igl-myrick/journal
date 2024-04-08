function Entry(titleText, bodyText) {
  this.title = titleText;
  this.body = bodyText;
}

Entry.prototype.countVowels = function() {
  const bodyArr = this.body.split("");
  let result = 0;
  bodyArr.forEach(function(element) {
    if (element.match(/[aeiou]/gi)) {
      result += 1;
    }
  });
  return result;
}

Entry.prototype.countConsonants = function() {
  const bodyArr = this.body.split("");
  let result = 0;
  bodyArr.forEach(function(element) {
    if (element.match(/[a-z]/gi) && !element.match(/[aeiou]/gi)) {
      result += 1;
    }
  });
  return result;
}