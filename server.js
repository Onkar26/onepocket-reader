const fs = require('fs');

const filename = 'data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }

  const wordCount = countWords(data);
  console.log(`Total word count in ${filename}: ${wordCount}`);
});

function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}
