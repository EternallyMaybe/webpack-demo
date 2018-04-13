import {cube} from './math.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component()　{
    var ele = document.createElement('pre');

    ele.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to' + cube(5)
    ].join('\n\n');

    return ele;
}
document.body.appendChild(component());
console.error('error');