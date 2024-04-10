function Entry(titleText, bodyText) {
  this.title = titleText;
  this.body = bodyText;
  this.charArray = bodyText.split("");
  this.wordArray = bodyText.split(" ");
  this.vowelCount = 0;
  this.consonantCount = 0;
  this.wordCount = 0;
}

Entry.prototype.countVowels = function() {
  this.charArray.forEach(function(element) {
    if (element.match(/[aeiou]/gi)) {
      this.vowelCount += 1;
    } else if (element.match(/[^aeiou\d\W]+/gi)) { // regex looks for consonants only
      this.consonantCount +=1;
    }
  });
}

Entry.prototype.countWords = function() {
  this.wordArray.forEach(function(element) {
    this.wordCount += 1;
  });
}

Entry.prototype.getTeaser = function() {
  let charCount = 0;
  this.charArray.forEach(function(element) {
    charCount += 1;
  });
  const periodIndex = this.charArray.indexOf(".") + 1;
  const teaser = this.charArray.toSpliced(periodIndex, charCount).join("");
  const teaserArr = teaser.split(" ");
  if (Object.keys(teaserArr).length > 8) {
    teaserArr.splice(8, 1);
    return teaserArr.join(" ") + " ...";
  } else {
    return teaserArr.join(" ");
  }
}