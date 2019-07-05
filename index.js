const { JSDOM } = require('jsdom');

let form = `
    <form id='test-form'></form>
    <input type='text' name='test' form='test-form' />
`;

let dom = new JSDOM(form);
console.log('expecting one form element');
console.log('actual: ' + dom.window.document.forms[0].elements.length);