const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = (tmpl, product) => {
    let output = tmpl.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%PRODUCT_NAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    if (!product.organic) { 
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    } else {
        output = output.replace(/{%NOT_ORGANIC%}/g, '');
    }

    return output;
};

const tmplOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tmplProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tmplCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((request, response) => {
    const {query, pathname} = url.parse(request.url, true);
    // Overview page
    if (pathname === '/' || pathname === '/overview') {
        response.writeHead(200, {'Content-type': 'text/html'});
        const cardsHtml = dataObject.map(el => replaceTemplate(tmplCard, el)).join('');
        const output = tmplOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
        response.end(output);

    // Product page
    } else if (pathname === '/product') {
        response.writeHead(200, {'Content-type': 'text/html'});
        const product = dataObject[query.id];
        const output = replaceTemplate(tmplProduct, product);
        response.end(output);
    
    // 404
    } else {
        response.writeHead(404, {
            'Content-type': 'text/html'
        });
        response.end('<h1>Page not found!</h1>');
    }
    
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});