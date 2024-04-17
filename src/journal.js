export default function Entry(titleText, bodyText) {
  this.title = titleText;
  this.body = bodyText;
  this.charArray = bodyText.split("");
  this.wordArray = bodyText.split(" ");
  this.vowelCount = 0;
  this.consonantCount = 0;
  this.wordCount = 0;
}

Entry.prototype.countCharacters = function() {
  for (const element of this.charArray) {
    if (element.match(/[aeiou]/gi)) {
      this.vowelCount += 1;
    } else if (element.match(/[^_aeiou\d\W]+/gi)) { // regex looks for consonants only
      this.consonantCount +=1;
    }
  }
};

Entry.prototype.countWords = function() {
  for (const word of this.wordArray) {
    this.wordCount += 1;
  }
};

Entry.prototype.getTeaser = function() {
  this.countWords();
  const teaser = this.wordArray.slice(0, 8);
  return teaser.join(" ") + " ...";
};