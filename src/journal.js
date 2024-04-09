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

Entry.prototype.countWords = function() {
  const bodyArr = this.body.split(" ");
  let result = 0;
  bodyArr.forEach(function(element) {
    result += 1;
  });
  return result;
}

Entry.prototype.getTeaser = function() {
  const bodyArr = this.body.split("");
  let count = 0;
  bodyArr.forEach(function(element) {
    count += 1;
  });
  const periodIndex = bodyArr.indexOf(".") + 1;
  bodyArr.splice(periodIndex, count);
  return bodyArr.join("");
}