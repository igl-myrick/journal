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