Describe: Entry

Test: It should return a new object with a title and body property.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry = { title: "Title", body: "Text" }

Describe: Entry.prototype.countVowels

Test: It should return the number of vowels in the entry's body.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry.countVowels = 1

Describe: Entry.prototype.countConsonants

Test: It should return the number of consonants in the entry's body.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry.countConsonants = 3