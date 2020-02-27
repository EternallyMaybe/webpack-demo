import './assets/css/index.scss';
import './assets/images/bg.jpg';
import('./assets/css/async.scss');


new Promise(() => {
    console.log('123')
})
fetch('/api/path').then((res) => {
    console.log(res)
});

console.log(document.getElementById('app'));

document.body.innerHTML = '<div class="blue">blue</div>';