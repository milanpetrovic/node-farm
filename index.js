const fs = require('fs');
const http = require('http');

//////////////////////////// FILES READING / WRITING //////////////////////////////////
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written');
//             });
//         });
//     });
// });
// console.log('Reading file...');



///////////////////////////////////// SERVER //////////////////////////////////////////
const server = http.createServer((request, response) => {
    response.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});