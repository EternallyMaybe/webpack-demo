import '@/assets/css/style.css';
// import _ from 'lodash';
import {square, cube} from './math';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = [
        '5 cubed is equal to' + square(5)
    ].join('\n\n');
+   element.classList.add('hello');

    return element;
}
document.body.appendChild(component());

// _.add(1, 2);