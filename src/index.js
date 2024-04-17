import Entry from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function addToEntryList(entryToAdd) {
  entryToAdd.countCharacters();
  entryToAdd.countWords();
  const entryListDiv = document.getElementById("entry-list");
  const entryWrapperDiv = document.createElement("div");
  const entryTitle = document.createElement("h4");
  const entryVowelCount = document.createElement("p");
  const entryConsonantCount = document.createElement("p");
  const entryWordCount = document.createElement("p");
  const entryTeaser = document.createElement("p");

  entryTitle.innerText = entryToAdd.title;
  entryVowelCount.innerText = entryToAdd.vowelCount;
  entryConsonantCount.innerText = entryToAdd.consonantCount;
  entryWordCount.innerText = entryToAdd.wordCount;
  entryTeaser.innerText = entryToAdd.getTeaser();

  entryWrapperDiv.append(entryTitle);
  entryWrapperDiv.append(entryTeaser);
  entryWrapperDiv.append(entryVowelCount);
  entryWrapperDiv.append(entryConsonantCount);
  entryWrapperDiv.append(entryWordCount);
  entryListDiv.append(entryWrapperDiv);
}

function handleNewEntry(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("entry").value;
  let newEntry = new Entry(title, body);
  addToEntryList(newEntry);
}

document.getElementById("new-entry-form").addEventListener("submit", handleNewEntry);