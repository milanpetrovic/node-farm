module.exports = (tmpl, product) => {
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