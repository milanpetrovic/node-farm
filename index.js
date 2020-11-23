const fs = require('fs');

const inputContent = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(inputContent);

const outputContent = `This is what we know about avocado: ${inputContent}.\nCreated on ${Date()}`;
fs.writeFileSync('./txt/output.txt', outputContent);