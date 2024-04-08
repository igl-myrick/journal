Describe: Entry

Test: It should return a new object with a title and body property.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry = { title: "Title", body: "Text" }

Describe: Entry.prototype.countLetters

Test: It should return an object with two key-value pairs containing the number of vowels and the number of consonants in the entry's body.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry.countLetters = { vowels: 1, consonants: 3 }