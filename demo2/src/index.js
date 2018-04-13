import _ from 'lodash'
import './style.css';
import img from './images.jpg';
// import './test.ttf';

function component()　{
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['Hello', 'webpack'], '~');
    ele.classList.add('hello');

    var myImg = new Image();
    myImg.src = img;
    ele.appendChild(myImg);

    return ele;
}
document.body.appendChild(component());