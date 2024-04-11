Describe: Entry

Test: It should return a new object with a title and body property.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry = { title: "Title", body: "Text" }

Test: It should return an object with various properties including values to count words, consonants, and vowels.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry = { title: "Title", body: "Text", charArray: ["T", "e", "x", "t"], wordArray: ["Text"], vowelCount: 0, consonantCount: 0, wordCount: 0 }

Describe: Entry.prototype.countCharacters

Test: It should update the vowelCount property in the Entry object.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry.vowelCount = 1

Test: It should update the vowelCount and consonantCount properties in the Entry object.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry.vowelCount = 1, newEntry.vowelCount = 3

Describe: Entry.prototype.countWords

Test: It should update the wordCount property in the Entry object.
Code: let newEntry = new Entry("Title", "Text");
Expect: newEntry.countWords = 1

Describe: Entry.prototype.getTeaser

Test: It should return the first sentence in the entry's body.
Code: let newEntry = newEntry("Title", "First sentence.");
Expect: newEntry.getTeaser = "First sentence."

Test: If the first sentence in the entry's body is longer than eight words, it should return the first eight words of the sentence.
Code: let newEntry = newEntry("Title", "This is a very, very, very, very, very long first sentence.");
Expect: newEntry.getTeaser = "This is a very, very, very, very, very ..."