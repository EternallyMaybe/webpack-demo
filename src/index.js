if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component()　{
    var ele = document.createElement('pre');

    ele.innerHTML = ['Hello', 'world'].join('\n\n');

    return ele;
}
document.body.appendChild(component());