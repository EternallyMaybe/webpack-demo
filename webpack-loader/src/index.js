// import './assets/css/index.scss';
// import './assets/images/bg.jpg';
// import('./assets/css/async.scss');

new Promise(() => {
    console.log('123')

})
fetch('/api/path').then((res) => {
    console.log(res)
});

document.body.innerHTML = '<div class="blue">blue</div>';
window.onload = function() {
    console.log($)
}

console.log(Reflect)