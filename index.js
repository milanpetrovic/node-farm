const fs = require('fs');

// const inputContent = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(inputContent);

// Asynchronous function instead of synchronous - non-blocking model
fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Reading file...');

// const outputContent = `This is what we know about avocado: ${inputContent}.\nCreated on ${Date()}`;
// fs.writeFileSync('./txt/output.txt', outputContent);