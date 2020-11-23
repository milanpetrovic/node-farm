const fs = require('fs');

// Blocking, synchronous way
/* const inputContent = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(inputContent);
const outputContent = `This is what we know about avocado: ${inputContent}.\nCreated on ${Date()}`;
fs.writeFileSync('./txt/output.txt', outputContent); */

// Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written');
            });
        });
    });
});
console.log('Reading file...');