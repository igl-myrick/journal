function Entry(titleText, bodyText) {
  this.title = titleText;
  this.body = bodyText;
  this.charCount = bodyText.split("");
  this.wordCount = bodyText.split(" ");
}

Entry.prototype.countVowels = function() {
  let result = 0;
  this.charCount.forEach(function(element) {
    if (element.match(/[aeiou]/gi)) {
      result += 1;
    }
  });
  return result;
}

Entry.prototype.countConsonants = function() {
  let result = 0;
  this.charCount.forEach(function(element) {
    if (element.match(/[^aeiou\d\W]+/gi)) { // regex looks for consonants only
      result += 1;
    }
  });
  return result;
}

Entry.prototype.countWords = function() {
  let result = 0;
  this.wordCount.forEach(function(element) {
    result += 1;
  });
  return result;
}

Entry.prototype.getTeaser = function() {
  let count = 0;
  this.charCount.forEach(function(element) {
    count += 1;
  });
  const periodIndex = this.charCount.indexOf(".") + 1;
  const teaser = this.charCount.toSpliced(periodIndex, count).join("");
  const teaserArr = teaser.split(" ");
  if (Object.keys(teaserArr).length > 8) {
    teaserArr.splice(8, 1);
    return teaserArr.join(" ") + " ...";
  } else {
    return teaserArr.join(" ");
  }
}

const newEntry = new Entry("test", "Abc def ghi jkl mno pqr stu vwx yz. One two three four five six seven eight nine.")

const firstSentence = newEntry.getTeaser();

console.log(firstSentence);