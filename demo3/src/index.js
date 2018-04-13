import _ from 'lodash'
import printMe from './print'

function component()　{
    var ele = document.createElement('div'),
        btn = document.createElement('button');

    ele.innerHTML = _.join(['Hello', 'webpack'], '~');
    ele.classList.add('hello');

    btn.innerHTML = 'Click me';
    btn.onclick = printMe;
    ele.appendChild(btn);

    return ele;
}
document.body.appendChild(component());